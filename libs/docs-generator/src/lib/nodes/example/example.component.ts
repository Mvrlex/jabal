import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { NODE_CONFIG_COMPONENT } from "../../docs-group/docs-group.component";

interface ExampleConfig {
  html?: string,
  ts?: string,
  css?: string
}

@Component({
  selector: 'docs-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {

  @Input()
  config: ExampleConfig;

  constructor(@Inject(NODE_CONFIG_COMPONENT) config: ExampleConfig) {
    this.config = config;
  }

}
