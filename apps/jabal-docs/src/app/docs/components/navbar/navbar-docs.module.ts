import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDocsComponent } from "./navbar-docs.component";
import { RouterModule } from "@angular/router";
import { NavbarModule } from "@jabal/jabal";

@NgModule({
  declarations: [
    NavbarDocsComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: NavbarDocsComponent }
    ])
  ]
})
export class NavbarDocsModule { }
