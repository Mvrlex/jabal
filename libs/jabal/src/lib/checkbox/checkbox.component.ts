import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const JBL_CHECKBOX_VALUE_ACCESSOR: any = {
  provide : NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi : true
};

/**
 * Implements a {@link ControlValueAccessor} for a checkbox component.
 */
@Component({
  selector: 'jbl-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers : [JBL_CHECKBOX_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {
  static ID = 0;

  onChange = (value: any) => {};
  onTouched = () => {};

  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() indeterminate: boolean;
  @Input() id = `ngui-checkbox-${CheckboxComponent.ID++}`;
  @Input() value: any = null;
  // @Input() name: string = null;

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
  writeValue(obj: any): void { this.checked = obj; }

}
