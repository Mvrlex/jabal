import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { JabalModule } from "@jabal/jabal";

import { DocsComponent } from './docs.component';
import { GettingStartedComponent } from "./getting-started/getting-started.component";
import { ComponentsComponent } from './components/components.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ExamplesComponent } from './examples/examples.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    JabalModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'getting-started'}, // /docs
      {
        path: '', component: DocsComponent, children: [ // /docs/...
          {path: 'getting-started', component: GettingStartedComponent},
          {path: 'components', component: ComponentsComponent},
          {path: 'changelog', component: ChangelogComponent},
          {path: 'examples', component: ExamplesComponent, data: { breadcrumb: 'Examples' }},
          {path: 'about', component: AboutComponent}
        ], data: { breadcrumb: 'Home' }
      }
    ])
  ],
  declarations: [
    DocsComponent,
    GettingStartedComponent,
    ExamplesComponent,
    ChangelogComponent,
    ComponentsComponent,
    AboutComponent
  ]
})
export class DocsModule { }
