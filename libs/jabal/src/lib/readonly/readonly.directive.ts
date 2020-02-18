import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[jblReadonly]'
})
export class ReadonlyDirective {

  @HostBinding('class.form-control-plaintext')
  @HostBinding('attr.readonly')
  @HostBinding('attr.disabled')
  @Input('jblReadonly')
  isReadonly = true;

}
