import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

/**
 * The module contains the {@link FooterComponent}.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
