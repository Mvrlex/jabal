import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  InjectionToken,
  Input, OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from "@angular/router";
import { filter, map, skipWhile, startWith, tap } from "rxjs/operators";
import { Subscription } from "rxjs";
import { BreadcrumbItem } from "./breadcrumb-item";

export const BREADCRUMB_ROUTE_DATA_NAME = new InjectionToken<string>(
  'Name of the data property of a route to be used inside a breadcrumb'
);

/**
 * Displays the hierarchy of the currently active routes.
 *
 * Declared in: {@link BreadcrumbModule}
 *
 * @property {BreadcrumbItem} breadcrumb - custom breadcrumb items
 * @property {boolean} skipUpdate - disables updating the breadcrumb on router changes
 *
 * @event routeChange - the {@link NavigationEnd} router event, on which the breadcrumb listens to, for implementing custom breadcrumb logic
 */
@Component({
  selector: 'jbl-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  private breadcrumbSub: Subscription;

  @Input()
  breadcrumb: BreadcrumbItem[];

  @Input()
  skipUpdate = false;

  @Output()
  routeChange = new EventEmitter<RouterEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(BREADCRUMB_ROUTE_DATA_NAME) private breadcrumbRouteDataName: string,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.initRouterEventListener();
  }

  ngOnDestroy(): void {
    this.closeRouterEventListener();
  }

  /**
   * Recursively builds the breadcrumb items from the {@link ActivatedRoute}.
   * @param route - the route from which to build the current breadcrumb
   * @param url - the current url string
   * @param breadcrumbs - the current breadcrumbs
   */
  private build(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbItem[] = []): BreadcrumbItem[] {
    // Update URL
    const currentPath = route.routeConfig ? route.routeConfig.path : '';
    const currentFullUrl = currentPath ? `${url}/${currentPath}` : url;
    // Create breadcrumb if breadcrumb data attribute is set
    if (route.routeConfig && route.routeConfig.data && route.routeConfig.data[this.breadcrumbRouteDataName]) {
      const breadcrumbItem = {
        name: route.routeConfig.data[this.breadcrumbRouteDataName],
        url: currentFullUrl
      };
      breadcrumbs.push(breadcrumbItem);
    }
    // Next
    if (route.firstChild) {
      return this.build(route.firstChild, currentFullUrl, breadcrumbs);
    }
    // End
    return breadcrumbs;
  }

  /**
   * Subscribes to the {@link Router} and listens reacts upon {@link NavigationEnd} events.
   */
  private initRouterEventListener() {
    this.breadcrumbSub = this.router.events.pipe(
      skipWhile(() => this.skipUpdate),
      filter((event: RouterEvent) => event instanceof NavigationEnd), // Only build upon NavigationEnd
      tap(() => this.routeChange.emit()),
      map(() => this.build(this.activatedRoute.root)), // Build new breadcrumbs
      startWith(this.build(this.activatedRoute.root)) // Initial build
    ).subscribe((breadcrumb: BreadcrumbItem[]) => {
      this.breadcrumb = breadcrumb; // TODO add append functionality
      this.changeDetection.detectChanges(); // Manual change detection because of OnPush
    });
  }

  /**
   * Unsubscribes from the {@link Router} events.
   */
  private closeRouterEventListener() {
    this.breadcrumbSub.unsubscribe();
  }

}
