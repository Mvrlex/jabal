import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CheckboxModule } from "@jabal/jabal";

import { CoreModule, DocConfig, DocContentComponent } from "../../../core/core.module";
import { BasicCheckboxComponent } from "./examples";

const docConfig: DocConfig[] = [
  {
    title: 'Checkbox',
    titleClass: 'display-4',
    text: require('!!raw-loader!./content/desc-checkbox.md').default,
    subDocs: [
      {
        title: 'Installation',
        text: require('!!raw-loader!./content/usage-checkbox.md').default
      },
      {
        title: 'Features',
        subDocs: [
          {
            title: 'Basic',
            text: require('!!raw-loader!./examples/basic/basic-checkbox.md').default,
            example: BasicCheckboxComponent,
            code: {
              html: require('!!raw-loader!./examples/basic/basic-checkbox.component.html').default,
              ts: require('!!raw-loader!./examples/basic/basic-checkbox.component.ts').default
            }
          }
        ]
      },
      {
        title: 'Troubleshooting',
        text: require('!!raw-loader!./content/troubleshooting-checkbox.md').default
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: DocContentComponent, data: {docConfig: docConfig} }
    ])
  ],
  declarations: [
    BasicCheckboxComponent
  ],
  entryComponents: [
    BasicCheckboxComponent
  ]
})
export class CheckboxDocsModule { }
