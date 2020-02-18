import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';

/**
 * This module contains the {@link RadioComponent}.
 * This component implements [Bootstraps custom radio](https://getbootstrap.com/docs/4.0/components/forms/#radios).
 */
@NgModule({
  declarations: [RadioComponent],
  imports: [
    CommonModule
  ],
  exports: [RadioComponent]
})
export class RadioModule { }
