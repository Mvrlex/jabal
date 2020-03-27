import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from "@jabal/jabal";

import { BasicCheckboxComponent } from "./examples";
import { DocGeneratorModule } from "../../../core/doc-generator/doc-generator.module";

import { docConfig } from './checkbox-docs.config';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    DocGeneratorModule.forRoot({ docConfig: docConfig })
  ],
  declarations: [
    BasicCheckboxComponent
  ],
  entryComponents: [
    BasicCheckboxComponent
  ]
})
export class CheckboxDocsModule { }
