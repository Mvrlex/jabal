import { Component, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DocConfig } from "../core.module";

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
    @Optional() private route: ActivatedRoute,
    @Optional() @Host() @SkipSelf() private parentDocs: DocContentComponent
  ) {}

  ngOnInit(): void {

    // Get current header size from parent if exists
    if (this.parentDocs) {
      this._currentHeaderSize = this.parentDocs._currentHeaderSize + 1;
    }

    // Get docConfig from route data if not already set
    if (
      !this.docConfig &&
      this.route &&
      this.route.routeConfig.data &&
      this.route.routeConfig.data['docConfig']
    ) {
      this.docConfig = this.route.routeConfig.data['docConfig'];
    }

  }

  getHeaderSize() {
    return 'h' + this._currentHeaderSize;
  }

}
