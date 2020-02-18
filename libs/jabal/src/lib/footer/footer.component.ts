import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

/**
 * Displays a footer.
 * For static content: Use one of the {link Slot}s to place your content at the right position.
 * Example:
 * ```
 * <jbl-footer>
 *   <my-content slot="center"></my-content>
 * </jbl-footer>
 * ```
 */
@Component({
  selector: 'jbl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  @Input()
  @HostBinding('class.fixed-bottom')
  fixed = false;

  @Input()
  responsive: boolean;

  @Input()
  dark: boolean;

  // Wrap content if it would move the center / overflow
  @Input()
  wrap: boolean;

  getTheme() {
    return this.dark ? 'bg-dark' : 'bg-light';
  }

  getContainer() {
    return this.responsive ? 'container-lg' : 'container-fluid';
  }

}
