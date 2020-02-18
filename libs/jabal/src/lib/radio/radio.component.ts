import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const NGUI_RADIO_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioComponent),
  multi : true
};

/**
 * Implements a {@link ControlValueAccessor} for a radio component.
 */
@Component({
  selector: 'jbl-radio',
  templateUrl: './radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers : [NGUI_RADIO_VALUE_ACCESSOR]
})
export class RadioComponent implements ControlValueAccessor {
  static ID = 0;

  onChange = (value: any) => {};
  onTouched = () => {};

  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() id = `ngui-radio-${RadioComponent.ID++}`;
  @Input() value: any = null;
  @Input() name: string = null;

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
  writeValue(obj: any): void { this.checked = obj; }

}
