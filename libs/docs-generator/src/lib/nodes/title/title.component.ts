import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, Optional } from '@angular/core';
import { NODE_CONFIG_COMPONENT, NODE_CONFIG_THIS } from '../../docs-group/docs-group.component'
import { ResolvedNode } from '../../node';
import { SubnavService } from "../../docs-subnav/subnav.service";

interface TitleConfig {
  title: string;
  titleClass?: string;
  skipNavbar?: boolean;
}

@Component({
  selector: 'docs-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {

  @Input()
  config: TitleConfig;

  constructor(
    @Inject(NODE_CONFIG_COMPONENT) config: TitleConfig,
    @Inject(NODE_CONFIG_THIS) public node?: ResolvedNode,
    @Optional() private subnavService?: SubnavService,
    private elementRef?: ElementRef
  ) {
    this.config = config;
  }

  ngOnInit(): void {
    if (this.subnavService && !this.config.skipNavbar) {
      this.subnavService.registerItem({
        node: this.node,
        title: this.config.title,
        offsetTop: this.elementRef.nativeElement.offsetTop
      });
    }
  }

}
