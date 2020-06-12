import { NgModule } from '@angular/core';

import { BrandModule } from "./brand/brand.module";
import { BreadcrumbModule } from "./breadcrumb/breadcrumb.module";
import { BreakpointModule } from "./breakpoint/breakpoint.module";
import { CheckboxModule } from "./checkbox/checkbox.module";
import { FooterModule } from "./footer/footer.module";
import { InsertionModule } from "./insertion/insertion.module";
import { JsonEditorModule } from "./json-editor/json-editor.module";
import { NavbarModule } from "./navbar/navbar.module";
import { RadioModule } from "./radio/radio.module";
import { ReadonlyModule } from "./readonly/readonly.module";
import { RouterDataModule } from "./router-data/router-data.module";

const components = [
  BrandModule,
  BreadcrumbModule,
  BreakpointModule,
  CheckboxModule,
  FooterModule,
  InsertionModule.forRoot(),
  JsonEditorModule,
  NavbarModule,
  RadioModule,
  ReadonlyModule,
  RouterDataModule
];

/**
 * This Module exports every component of the library, it should only be imported if you are using all of them.
 * Use the respective module of a component for the smallest footprint.
 */
@NgModule({
  imports: [components],
  exports: [components]
})
export class JabalModule {}
