import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsGeneratorModule, NODE_CONFIG } from "@jabal/docs-generator";
import { nodeConfig } from "./navbar-docs.config";

import { NavbarModule } from "@jabal/jabal";
import { BasicNavbarComponent, SlottedNavbarComponent } from "./examples";

@NgModule({
  imports: [
    CommonModule,
    DocsGeneratorModule,
    NavbarModule
  ],
  declarations: [
    BasicNavbarComponent,
    SlottedNavbarComponent
  ],
  entryComponents: [
    BasicNavbarComponent,
    SlottedNavbarComponent
  ],
  providers: [
    {
      provide: NODE_CONFIG,
      useValue: nodeConfig
    }
  ]
})
export class NavbarDocsModule { }
