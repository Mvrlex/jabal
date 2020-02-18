import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export const enum BrandSizing {
  SMALL = 0,
  MEDIUM = 1,
  LARGE = 2
}

const defaultScalingFactor = [ 0.8, 1, 1.2 ];
const defaultHeight = 50;

/**
 * This component allows to add a logo to the page.
 * It has a few inputs and defaults which make this process easy.
 *
 * Declared in: {@link BrandComponent}
 *
 * @property {string | any[]} routerLink - the routerLink the logo will trigger
 * @property {BrandSizing | number} sizing - the scaling from the default size of 50px
 * @property {boolean} keepSvg - include SVG with an <object>, this keeps animations and other styling intact
 * @property {string} src - path to the logo
 */
@Component({
  selector: 'jbl-brand',
  templateUrl: './brand.component.html',
  styles: [':host, a { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandComponent {

  private height = defaultHeight;

  @Input() routerLink: string | any[];

  @Input() sizing: BrandSizing | number = BrandSizing.MEDIUM;

  // Allows for edits after inclusion, useful for reacting upon breakpoints or for animations, which wont work otherwise
  @Input() keepSvg = false;

  @Input() src: string;

  getHeight() {
    return this.height * (defaultScalingFactor[this.sizing] || this.sizing) + 'px';
  }

}
