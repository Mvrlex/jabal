import {
  apply,
  chain,
  mergeWith,
  move,
  renameTemplateFiles,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { join, normalize, parse, ParsedPath } from 'path';
import { addGlobal, getProjectConfig, insert } from "@nrwl/workspace";

import * as ts from 'typescript';

import { Schema } from "./schema";
import { addDeclarationToModule, addEntryComponents, getTsSourceFile } from "@nrwl/angular/src/utils/ast-utils";
import { classify } from "@nrwl/workspace/src/utils/strings";
import { fileExists } from "@nrwl/workspace/src/utils/fileutils";
import { insertImport } from "@nrwl/workspace/src/utils/ast-utils";

export default function(_options: Schema): Rule {

  // Seperate name and path
  const path: ParsedPath = parse(_options.name);
  _options.name = path.name;
  _options.path = normalize(path.dir);
  if (path.dir.endsWith('examples')) {
    const parentPath = normalize(path.dir.substr(0, path.dir.lastIndexOf('examples') -1));
    _options.docPagePath = parentPath;
    _options.component = parse(parentPath).name;
  }

  // Set component name
  _options.componentName = strings.dasherize(_options.name);
  if (_options.component)
    _options.componentName = _options.componentName + '-' + strings.dasherize(_options.component);

  return (tree: Tree, _context: SchematicContext) => {
    return chain([
      generateFiles(_options)
    ])(tree, _context);
  };
}

function generateFiles(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const templateSource = apply( // Create tree
      url('./templates'),  // From source
      [
        template({..._options, ...strings}), // Read templates
        renameTemplateFiles(), // Strip .template
        move(join(
          getProjectConfig(tree, _options.project).sourceRoot,
          'app',
          _options.path
        )) // Move to
      ]
    );

    return chain([
      addDeclarationAndExport(_options),
      mergeWith(templateSource)
    ])(tree, _context);
  }
}

function addDeclarationAndExport(_options: Schema): Rule {
  return (tree: Tree) => {

    const modulePath = join(
      getProjectConfig(tree, _options.project).sourceRoot,
      'app',
      _options.docPagePath,
      `${_options.component}-docs.module.ts`
    );

    const indexPath = join(
      getProjectConfig(tree, _options.project).sourceRoot,
      'app',
      _options.path,
      'index.ts'
    )

    if (fileExists(modulePath)) {

      const componentClassName = classify(_options.componentName + '-component');
      const indexSource = ts.createSourceFile(
        indexPath,
        tree.read(indexPath).toString(),
        ts.ScriptTarget.Latest,
        true
      );
      const moduleSource = ts.createSourceFile(
        modulePath,
        tree.read(modulePath).toString(),
        ts.ScriptTarget.Latest,
        true
      );

      // Export from index
      insert(tree, indexPath, [
        ...addGlobal(
          indexSource,
          indexPath,
          `export { ${componentClassName} } from "${['.', _options.name, _options.componentName + '.component'].join('/')}";`
        )
      ]);

      // Import and declare in module
      insert(tree, modulePath, [
        insertImport(
          moduleSource,
          modulePath,
          componentClassName,
          './examples'
        ),
        ...addDeclarationToModule(
          getTsSourceFile(tree, modulePath), // Module source file
          modulePath, // Module path
          componentClassName // Component class name
        ),
        ...addEntryComponents(
          getTsSourceFile(tree, modulePath), // Module source file
          modulePath, // Module path
          componentClassName // Component class name
        )
      ]);

    }

    return tree;
  }
}
