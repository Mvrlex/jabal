import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { RouterModule } from "@angular/router";

/**
 * This module contains the {@link BrandComponent}.
 * It allows to easily include the branding of a company into the application.
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BrandComponent],
  exports: [BrandComponent]
})
export class BrandModule { }
