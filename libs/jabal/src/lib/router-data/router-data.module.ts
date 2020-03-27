import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { RouterDataService } from "./router-data.service";

@NgModule({
  imports: [ RouterModule ],
  providers: [ RouterDataService ]
})
export class RouterDataModule { }
