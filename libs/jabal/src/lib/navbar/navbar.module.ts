import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { NavItemComponent } from './nav-item/nav-item.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavbarComponent,
    NavItemComponent
  ],
  exports: [
    NavbarComponent,
    NavItemComponent
  ]
})
export class NavbarModule {}
