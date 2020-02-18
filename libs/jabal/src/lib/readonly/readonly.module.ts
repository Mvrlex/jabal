import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadonlyDirective } from './readonly.directive';

@NgModule({
  declarations: [ReadonlyDirective],
  imports: [CommonModule],
  exports: [ReadonlyDirective]
})
export class ReadonlyModule { }
