import {
  Component,
  Host, Inject,
  InjectionToken,
  Input,
  OnInit,
  Optional,
  SkipSelf
} from '@angular/core';
import { dasherize } from "@nrwl/workspace/src/utils/strings";
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
    @Optional() @Inject(DOC_CONFIG) private injectedDocConfig: DocConfig[],
    @Optional() @Host() @SkipSelf() private parentDocs: DocContentComponent
  ) {}

  ngOnInit(): void {
    if (this.parentDocs) this._currentHeaderSize = this.parentDocs._currentHeaderSize + 1;
    if (!this.docConfig && this.injectedDocConfig) this.docConfig = this.injectedDocConfig;
  }

  getHeaderSize() {
    return `h${this._currentHeaderSize}`;
  }

  getFragment(doc: DocConfig) {
    return dasherize(doc.title);
  }

}
