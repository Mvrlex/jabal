import { chain, externalSchematic, Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { join } from 'path';
import { Schema } from "./schema";

export default function(schema: Schema): Rule {
  (tree: Tree, _context: SchematicContext) => {
  }
  return chain([
    externalSchematic('@schematics/angular', 'module', {
      project: schema.project,
      name: 'jbl-' + schema.name,
      module: 'jabal.module.ts',
      path: join(
        'libs',
        schema.project,
        'src',
        'lib',
        schema.name
      )
    }),
    externalSchematic('@schematics/angular', 'component', {
      project: schema.project,
      name: 'jbl-' + schema.name,
      export: true,
      path: join(
        'libs',
        schema.project,
        'src',
        'lib',
        schema.name
      )
    })
  ]);
}
