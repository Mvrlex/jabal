import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { Node } from './node';
import { DocsContainerComponent, NODE_CONFIG } from './docs-container/docs-container.component';
import { DocsGroupComponent } from './docs-group/docs-group.component';
import { DocsSubnavComponent } from './docs-subnav/docs-subnav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: DocsContainerComponent }
    ])
  ],
  declarations: [
    DocsContainerComponent,
    DocsSubnavComponent,
    DocsGroupComponent
  ],
  providers: [
    {
      provide: NODE_CONFIG,
      useValue: []
    }
  ]
})
export class DocsGeneratorModule {
  static forRoot(config?: {nodeConfig: Node[]}): ModuleWithProviders<DocsGeneratorModule> {
    const providers: Provider[] = [];

    // Add config
    if (config) providers.push({
      provide: NODE_CONFIG,
      useValue: config.nodeConfig
    });

    return {
      ngModule: DocsGeneratorModule,
      providers: [...providers]
    };
  }
}
