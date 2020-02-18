import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'jbl-nav-item',
  templateUrl: './nav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {

  @Input() routerLink: string | any[];

}
