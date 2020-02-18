import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'jbl-navbar',
  templateUrl: './navbar.component.html',
  styles: [':host { display: block }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  @Input()
  responsive: boolean;

  @Input()
  dark: boolean;

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  getTheme() {
    return this.dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light';
  }

  getContainer() {
    return this.responsive ? 'container-lg' : 'container-fluid';
  }

}
