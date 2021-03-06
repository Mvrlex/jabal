import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { JabalModule } from "@jabal/jabal";
import { DefaultNodesModule } from "@jabal/docs-generator";

import { DocsComponent } from './docs.component';
import { GettingStartedComponent } from "./getting-started/getting-started.component";
import { ChangelogComponent } from './changelog/changelog.component';
import { ExamplesComponent } from './examples/examples.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    JabalModule,
    DefaultNodesModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'getting-started'}, // /docs
      {
        path: '', component: DocsComponent, children: [ // /docs/...
          {path: 'getting-started', component: GettingStartedComponent},
          {
            path: 'components',
            children: [
              {
                path: 'navbar',
                loadChildren: () => import('./components/navbar/navbar-docs.module').then(m => m.NavbarDocsModule),
                data: { component: 'Navbar' }
              },
              {
                path: 'checkbox',
                loadChildren: () => import('./components/checkbox/checkbox-docs.module').then(m => m.CheckboxDocsModule),
                data: { component: 'Checkbox' }
              }
            ]
          },
          {path: 'changelog', component: ChangelogComponent},
          {path: 'examples', component: ExamplesComponent, data: {breadcrumb: 'Examples'}},
          {path: 'about', component: AboutComponent}
        ], data: {breadcrumb: 'Home'}
      }
    ])
  ],
  declarations: [
    DocsComponent,
    GettingStartedComponent,
    ExamplesComponent,
    ChangelogComponent,
    AboutComponent
  ]
})
export class DocsModule { }
