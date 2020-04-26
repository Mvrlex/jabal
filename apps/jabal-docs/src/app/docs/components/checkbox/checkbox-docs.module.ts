import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsGeneratorModule, NODE_CONFIG } from "@jabal/docs-generator";
import { nodeConfig } from "./checkbox-docs.config";

import { CheckboxModule } from "@jabal/jabal";
import { BasicCheckboxComponent } from "./examples";

@NgModule({
  imports: [
    CommonModule,
    DocsGeneratorModule,
    CheckboxModule
  ],
  declarations: [
    BasicCheckboxComponent
  ],
  entryComponents: [
    BasicCheckboxComponent
  ],
  providers: [
    {
      provide: NODE_CONFIG,
      useValue: nodeConfig
    }
  ]
})
export class CheckboxDocsModule { }
