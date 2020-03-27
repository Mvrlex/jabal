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
import { RouterDataService } from "../router-data/router-data.service";
import { RouteData } from "../router-data/route-data";

export const BREADCRUMB_ROUTE_DATA_NAME = new InjectionToken<string>(
  'Name of the data property of a route to be used inside a breadcrumb'
);

/**
 * Displays the hierarchy of the currently active routes.
 *
 * Declared in: {@link BreadcrumbModule}
 *
 * @property {RouteData} breadcrumb - custom breadcrumb items
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
  breadcrumb: RouteData[];

  @Input()
  skipUpdate = false;

  @Output()
  routeChange = new EventEmitter<RouterEvent>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(BREADCRUMB_ROUTE_DATA_NAME) private breadcrumbRouteDataName: string,
    private changeDetection: ChangeDetectorRef,
    private routerData: RouterDataService
  ) { }

  ngOnInit() {
    this.initRouterEventListener();
  }

  ngOnDestroy(): void {
    this.closeRouterEventListener();
  }

  /**
   * Subscribes to the {@link Router} and listens reacts upon {@link NavigationEnd} events.
   */
  private initRouterEventListener() {
    this.breadcrumbSub = this.router.events.pipe(
      skipWhile(() => this.skipUpdate),
      filter((event: RouterEvent) => event instanceof NavigationEnd), // Only build upon NavigationEnd
      tap(() => this.routeChange.emit()),
      map(() => this.routerData.getDataFromTraverse(this.activatedRoute.root, this.breadcrumbRouteDataName)), // Build new breadcrumbs
      startWith(this.routerData.getDataFromTraverse(this.activatedRoute.root, this.breadcrumbRouteDataName)) // Initial build
    ).subscribe((breadcrumb: RouteData[]) => {
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
