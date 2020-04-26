import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { NODE_CONFIG_COMPONENT } from "../../docs-group/docs-group.component";

interface MarkdownConfig {
  text: string;
}

@Component({
  selector: 'docs-md',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkdownComponent {

  @Input()
  config: MarkdownConfig;

  constructor(@Inject(NODE_CONFIG_COMPONENT) config: MarkdownConfig) {
    this.config = config;
  }

}
