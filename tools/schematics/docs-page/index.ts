import {
  apply,
  chain,
  mergeWith,
  move,
  renameTemplateFiles,
  Rule,
  schematic,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { join, parse, ParsedPath } from 'path';
import { getProjectConfig } from "@nrwl/workspace";

import { Schema } from "./schema";

export default function(_options: Schema): Rule {

  const namePath: ParsedPath = parse(_options.name);
  _options.name = namePath.name;
  _options.path = namePath.dir;

  return (tree: Tree, _context: SchematicContext) => {
    return chain([
      generateFiles(_options),
      schematic('docs-example', {
        name: join(_options.path, _options.name, '/examples/basic'),
        project: _options.project
      })
    ])(tree, _context);
  };
}

function generateFiles(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const projectRoot = getProjectConfig(tree, _options.project).sourceRoot;
    const templateSource = apply( // Create tree
      url('./templates'),  // From source
      [
        template({..._options, ...strings}), // Read templates
        renameTemplateFiles(), // Strip .template
        move(join(projectRoot, 'app', _options.path)) // Move to
      ]
    );
    return chain([
      mergeWith(templateSource)
    ])(tree, _context);
  }
}
