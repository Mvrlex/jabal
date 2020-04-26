import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TabsModule } from "ngx-bootstrap/tabs";
import { MarkdownModule } from "ngx-markdown";

import { ExampleComponent } from './example/example.component';
import { MarkdownComponent } from "./markdown/markdown.component";
import { TitleComponent } from "./title/title.component";

export {
  ExampleComponent,
  MarkdownComponent,
  TitleComponent
};

@NgModule({
  declarations: [
    ExampleComponent,
    MarkdownComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    MarkdownModule.forRoot(),
    RouterModule
  ],
  exports: [
    ExampleComponent,
    MarkdownComponent,
    TitleComponent
  ]
})
export class DefaultNodesModule { }
