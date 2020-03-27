import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from "@jabal/jabal";

import { BasicNavbarComponent, SlottedNavbarComponent } from "./examples";
import { DocGeneratorModule } from "../../../core/doc-generator/doc-generator.module";
import { docConfig } from "./navbar-docs.config";

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    DocGeneratorModule.forRoot({ docConfig: docConfig })
  ],
  declarations: [
    BasicNavbarComponent,
    SlottedNavbarComponent
  ],
  entryComponents: [
    BasicNavbarComponent,
    SlottedNavbarComponent
  ]
})
export class NavbarDocsModule { }
