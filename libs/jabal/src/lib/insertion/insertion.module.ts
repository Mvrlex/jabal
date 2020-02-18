import { NgModule } from "@angular/core";
import { InsertionComponent } from "./insertion.component";
import { InsertionService } from "./insertion.service";

@NgModule({
  declarations: [InsertionComponent],
  exports: [InsertionComponent],
  providers: [InsertionService]
})
export class InsertionModule {}
