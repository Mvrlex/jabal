import { ModuleWithProviders, NgModule } from '@angular/core';
import { BREAKPOINTS, BreakpointService } from "./breakpoint.service";
import { Breakpoint } from "./breakpoint";

export { BREAKPOINTS, Breakpoint }; // Reexport

// TODO make definition more easy
// Default value for the BREAKPOINTS token
const defaultBreakpoints: Breakpoint[] = [
  {name: 'xs', from: 0, to: 575},
  {name: 'sm', from: 576, to: 767},
  {name: 'md', from: 768, to: 991},
  {name: 'lg', from: 992, to: 1199},
  {name: 'xl', from: 1200, to: Infinity}
];

/**
 * This module contains the {@link BreakpointService}.
 * The service allows for programmatic changes to happen when a specific breakpoint is reached.
 *
 * By default the service will react upon the breakpoints specified [by Bootstrap](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints).
 * Custom breakpoints can be set through the {@link BREAKPOINTS} token or through usage of the forRoot method.
 */
@NgModule({
  providers: [
    BreakpointService,
    {
      provide: BREAKPOINTS,
      useValue: defaultBreakpoints
    }
  ]
})
export class BreakpointModule {
  static forRoot(config: {breakpoints?: Breakpoint[]}): ModuleWithProviders {
    return {
      ngModule: BreakpointModule,
      providers: [
        BreakpointService,
        {
          provide: BREAKPOINTS,
          useValue: config.breakpoints ? config.breakpoints : defaultBreakpoints
        }
      ]
    };
  }
}
