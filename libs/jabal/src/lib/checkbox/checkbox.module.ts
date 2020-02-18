import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';

/**
 * This module contains the {@link CheckboxComponent}.
 * This component implements [Bootstraps custom checkbox](https://getbootstrap.com/docs/4.0/components/forms/#checkboxes).
 */
@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
