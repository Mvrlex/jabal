import { Component, InjectionToken, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ResolvedNode } from "../node";

export const NODE_CONFIG_THIS = new InjectionToken<ResolvedNode>(
  'DOCS_NODE_CONFIG_THIS'
);

export const NODE_CONFIG_COMPONENT = new InjectionToken<any>(
  'DOCS_NODE_CONFIG_COMPONENT'
);

@Component({
  selector: 'docs-group',
  templateUrl: './docs-group.component.html',
  styleUrls: ['./docs-group.component.scss']
})
export class DocsGroupComponent implements OnInit {

  @ViewChild('docs', { read: ViewContainerRef, static: true })
  private docsContainer: ViewContainerRef;

  @Input()
  config: ResolvedNode;

  constructor(
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.generateNode(this.docsContainer, this.config);
  }

  generateNode(viewContainer: ViewContainerRef, node: ResolvedNode) {
    if (node.components) {
      node.components.forEach((component) => {
        const cmpRef = viewContainer.createComponent(
          component.factory,
          undefined,
          this.addInjectorValues(component.config)
        );
        cmpRef.changeDetectorRef.detectChanges();
      });
    }
  }

  /**
   * Add the current config as a token to be used by child components.
   */
  private addInjectorValues(componentConfig: any): Injector {
    return Injector.create({
      providers: [
        {
          provide: NODE_CONFIG_THIS,
          useValue: this.config
        },
        {
          provide: NODE_CONFIG_COMPONENT,
          useValue: componentConfig
        }
      ],
      parent: this.injector
    });
  }

}
