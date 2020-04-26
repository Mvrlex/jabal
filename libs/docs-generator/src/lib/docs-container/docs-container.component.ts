import {
  Component,
  ComponentFactoryResolver,
  Inject,
  InjectionToken,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Node, NodeComponent, ResolvedNode } from "../node";

export const NODE_CONFIG = new InjectionToken<Node[]>(
  'Configuration for all nodes'
);

@Component({
  selector: 'docs-container',
  templateUrl: './docs-container.component.html',
  styleUrls: ['./docs-container.component.scss']
})
export class DocsContainerComponent implements OnInit {

  @ViewChild('docs', { read: ViewContainerRef, static: true })
  private docsContainer: ViewContainerRef;

  resolvedConfig: ResolvedNode[];

  constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(NODE_CONFIG) private config: Node[]
  ) {}

  ngOnInit(): void {
    this.resolvedConfig = this.resolveConfig(this.config);
  }

  /**
   * Resolves a config so it can be used for generating components with it.
   * @param config - the {@link DocConfig} to resolve
   */
  private resolveConfig(config: Node[]): ResolvedNode[] {
    return config.map<ResolvedNode>((cfg) => {
      const resolved: ResolvedNode = new ResolvedNode();
      resolved.id = cfg.id;
      if (cfg.nodes) resolved.components = this.resolveComponents(cfg.nodes);
      if (cfg.children) resolved.children = this.resolveConfig(cfg.children);
      return resolved;
    });
  }

  /**
   * Resolves all given objects/strings to their appropriate classes.
   * @param components - array of components to resolve
   */
  private resolveComponents(components: (Type<any> | any)[]): NodeComponent[] {
    return components.map<NodeComponent>((component) => {
      const resolvedComponent: NodeComponent = { factory: undefined, config: {} };
      if (typeof component === 'object') {
        // Create factory from any component instance
        resolvedComponent.factory = this.resolver.resolveComponentFactory(Object.getPrototypeOf(component).constructor);
        // Store config data from the component
        if (!!component['config']) resolvedComponent.config = component['config'];
      } else {
        throw new Error(`Expected "object" but got "${typeof component}". Please pass an instance of a component.`)
      }
      return resolvedComponent;
    });
  }

}
