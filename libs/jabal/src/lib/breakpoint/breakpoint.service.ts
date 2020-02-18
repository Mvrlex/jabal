import { Inject, Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, fromEvent } from "rxjs";
import { Breakpoint } from "./breakpoint";

export const BREAKPOINTS = new InjectionToken<Breakpoint[]>(
  'Page breakpoint values of the app'
);

/**
 * Tracks the currently active breakpoint and allows for programmatic changes upon those.
 *
 * Declared in: {@link BreadcrumbModule}
 *
 * @event breakpointChange - emits the currently active {@link Breakpoint}
 */
@Injectable()
export class BreakpointService {

  _currentBreakpoint: Breakpoint;
  _currentWidth: number = window.innerWidth;
  breakpointChange: BehaviorSubject<Breakpoint>;

  constructor(
    @Inject(BREAKPOINTS)
    private breakpoints: Breakpoint[]
  ) {

    // Get initial breakpoint
    this._currentBreakpoint = this.getNewBreakpoint();

    // Create emitter for breakpoints
    this.breakpointChange = new BehaviorSubject<Breakpoint>(this._currentBreakpoint);

    // Start listening to resize events
    this.initResizeEventListener();

  }

  /**
   * Subscribes to the resize event of the browser and sets up the tracking logic.
   */
  private initResizeEventListener() {
    fromEvent(window, 'resize')
      .subscribe((e: UIEvent) => {
        this._currentWidth = (<Window>e.target).innerWidth;
        const newBreakpoint = this.getNewBreakpoint();
        if (newBreakpoint) {
          this._currentBreakpoint = newBreakpoint;
          this.breakpointChange.next(this._currentBreakpoint);
        }
      });
  }

  /**
   * Checks if a new {@link Breakpoint} was reached and returns it, otherwise it will return undefined.
   */
  private getNewBreakpoint(): Breakpoint {
    return this.breakpoints.find((breakpoint: Breakpoint) => {
      return this._currentWidth >= breakpoint.from &&
        this._currentWidth <= breakpoint.to &&
        breakpoint !== this._currentBreakpoint;
    });
  }

}
