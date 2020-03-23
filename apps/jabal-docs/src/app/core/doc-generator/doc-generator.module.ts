import { ModuleWithProviders, NgModule, Type } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";
import { TabsModule } from "ngx-bootstrap";

import { DOC_CONFIG, DocContentComponent } from "./doc-content/doc-content.component";
import { RouterModule } from "@angular/router";

// Reexport
export { DOC_CONFIG, DocContentComponent } from "./doc-content/doc-content.component";

const defaultDocConfig = [{ title: '//TODO' }];

export interface DocConfig {
  title?: string;
  titleClass?: string;
  text?: string;
  code?: {
    html?: string;
    ts?: string;
    css?: string;
  },
  example?: Type<any> | string,
  subDocs?: DocConfig[]
}

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: DocContentComponent}
    ])
  ],
  declarations: [DocContentComponent],
  exports: [DocContentComponent],
  providers: [,
    {
      provide: DOC_CONFIG,
      useValue: defaultDocConfig
    }
  ]
})
export class DocGeneratorModule {
  static forRoot(config: {docConfig?: DocConfig[]}): ModuleWithProviders {
    return {
      ngModule: DocGeneratorModule,
      providers: [
        {
          provide: DOC_CONFIG,
          useValue: config.docConfig ? config.docConfig : defaultDocConfig
        }
      ]
    };
  }
}
