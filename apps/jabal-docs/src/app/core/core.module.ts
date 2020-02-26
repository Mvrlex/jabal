import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";
import { TabsModule } from "ngx-bootstrap";

import { DocContentComponent } from "./doc-content/doc-content.component";

// Reexport
export { DocContentComponent } from "./doc-content/doc-content.component";

export interface DocConfig {
  title?: string;
  titleClass?: string;
  text?: string;
  code?: {
    html?: string;
    ts?: string;
    css?: string;
  },
  example?: any,
  subDocs?: DocConfig[]
}

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [DocContentComponent],
  exports: [DocContentComponent]
})
export class CoreModule {}
