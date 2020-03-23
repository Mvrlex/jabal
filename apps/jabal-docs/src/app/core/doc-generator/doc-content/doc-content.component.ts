import {
  Component,
  ComponentFactoryResolver,
  Host, Inject,
  InjectionToken,
  Input,
  OnInit,
  Optional,
  SkipSelf,
  Type
} from '@angular/core';
import { DocConfig } from "../doc-generator.module";

export const DOC_CONFIG = new InjectionToken<DocConfig[]>(
  'Configuration for doc generation'
);

@Component({
  selector: 'docs-doc-content',
  templateUrl: './doc-content.component.html',
  styleUrls: ['./doc-content.component.scss']
})
export class DocContentComponent implements OnInit {

  @Input()
  docConfig: DocConfig[];

  _currentHeaderSize = 1;

  constructor(
    private resolver: ComponentFactoryResolver,
    @Optional() @Inject(DOC_CONFIG) private injectedDocConfig: DocConfig[],
    @Optional() @Host() @SkipSelf() private parentDocs: DocContentComponent
  ) {}

  ngOnInit(): void {

    // Get current header size from parent if exists
    if (this.parentDocs) this._currentHeaderSize = this.parentDocs._currentHeaderSize + 1;

    // Get docConfig from route data if not already set
    if (
      !this.docConfig &&
      this.injectedDocConfig
    ) {
      this.docConfig = this.injectedDocConfig;
    }

    // Resolves all class names that were given by string to the appropriate component
    this.resolveClassNamesFromConfig(this.docConfig);

    try {
      console.log(require(this.docConfig[0].text));
    } catch (e) {
      console.log('not found:' + this.docConfig[0].text);
    }

  }

  getHeaderSize() {
    return 'h' + this._currentHeaderSize;
  }

  /**
   * Resolves a class name to a component by searching through all component factories.
   * Thanks to https://stackoverflow.com/a/40115407/4411118 for this solution
   * @param className - class name of the component
   */
  private resolveClassName(className: string): Type<any> {
    // Gets all component factories
    const componentFactories = Array.from(this.resolver['_factories'].keys());
    // Find specific component by name
    return <Type<any>>componentFactories.find((factory: any) => factory.name === className);
  }

  /**
   * Resolves all class names that were given by string to their appropriate classes/components.
   * @param config - the {@link DocConfig} to resolve the class names from
   */
  private resolveClassNamesFromConfig(config: DocConfig[]) {
    return config.forEach((config) => {
      if (config.example && typeof config.example === 'string') config.example = this.resolveClassName(config.example);
      if (config.subDocs) this.resolveClassNamesFromConfig(config.subDocs);
    })
  }

}
