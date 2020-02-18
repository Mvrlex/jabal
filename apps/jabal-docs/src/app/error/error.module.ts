import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NotFoundComponent }
    ])
  ],
  declarations: [NotFoundComponent]
})
export class ErrorModule {}
