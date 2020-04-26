import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BREADCRUMB_ROUTE_DATA_NAME, BreadcrumbComponent } from "./breadcrumb.component";
import { RouterDataModule } from "../router-data/router-data.module";

export { BREADCRUMB_ROUTE_DATA_NAME }; // Reexport

// Default value for the BREADCRUMB_ROUTE_DATA_NAME token
const defaultRouteDataName = 'breadcrumb';

/**
 * This Module contains the {@link BreadcrumbComponent}.
 * The breadcrumb lets the user see the routes which he navigated through, and allows him to quickly navigate to them.
 *
 * A route that is to be visible inside of the breadcrumb has to have a data attribute set. The name of the data
 * attribute is "breadcrumb" by default, but can be adjusted through the use of the {@link BREADCRUMB_ROUTE_DATA_NAME} token
 * or the forRoot method. The route will then be referenced by the name given to the attribute. This makes sure that
 * wrapper routes do not make an appearance inside of the breadcrumb, and that the correct routing names are used.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterDataModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  providers: [
    { provide: BREADCRUMB_ROUTE_DATA_NAME, useValue: defaultRouteDataName }
  ]
})
export class BreadcrumbModule {
  static forRoot(config: {routeDataName?: string}): ModuleWithProviders<BreadcrumbModule> {
    return {
      ngModule: BreadcrumbModule,
      providers: [
        {
          provide: BREADCRUMB_ROUTE_DATA_NAME,
          useValue: config.routeDataName ? config.routeDataName : defaultRouteDataName
        }
      ]
    }
  }
}
