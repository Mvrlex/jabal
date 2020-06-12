import { ModuleWithProviders, NgModule } from "@angular/core";
import { InsertionComponent } from "./insertion.component";
import { InsertionService } from "./insertion.service";
import { InsertDirective } from "./insert.directive";

@NgModule({
  declarations: [InsertionComponent, InsertDirective],
  exports: [InsertionComponent, InsertDirective]
})
export class InsertionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InsertionModule,
      providers: [
        InsertionService
      ]
    }
  }
}
