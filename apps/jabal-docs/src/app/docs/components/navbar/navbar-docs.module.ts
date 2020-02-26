import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NavbarModule } from "@jabal/jabal";

import { BasicNavbarComponent, SlottedNavbarComponent } from "./examples";
import { CoreModule, DocConfig, DocContentComponent } from "../../../core/core.module";

const docConfig: DocConfig[] = [
  {
    title: 'Navbar',
    titleClass: 'display-4',
    text: require('!!raw-loader!./content/desc-navbar.md').default,
    subDocs: [
      {
        title: 'Installation',
        text: require('!!raw-loader!./content/usage-navbar.md').default
      },
      {
        title: 'Features',
        subDocs: [
          {
            title: 'Basic',
            text: require('!!raw-loader!./examples/basic/basic-navbar.md').default,
            example: BasicNavbarComponent,
            code: {
              html: require('!!raw-loader!./examples/basic/basic-navbar.component.html').default,
              ts: require('!!raw-loader!./examples/basic/basic-navbar.component.ts').default
            }
          },
          {
            title: 'Slotted',
            text: require('!!raw-loader!./examples/slotted/slotted-navbar.md').default,
            example: SlottedNavbarComponent,
            code: {
              html: require('!!raw-loader!./examples/slotted/slotted-navbar.component.html').default,
              ts: require('!!raw-loader!./examples/slotted/slotted-navbar.component.ts').default
            }
          }
        ]
      },
      {
        title: 'Troubleshooting',
        text: require('!!raw-loader!./content/troubleshooting-navbar.md').default
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: DocContentComponent, data: {docConfig: docConfig} }
    ])
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
