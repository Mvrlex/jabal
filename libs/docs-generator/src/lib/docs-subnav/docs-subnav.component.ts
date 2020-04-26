import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from "@angular/router";
import { fromEvent, Subscription } from "rxjs";
import { auditTime, filter, first } from "rxjs/operators";

import { NODE_CONFIG } from "../docs-container/docs-container.component";
import { Node } from "../node";
import { SubnavService } from "./subnav.service";
import { SubnavItem } from "./subnav-item";

@Component({
  selector: 'docs-subnav',
  templateUrl: './docs-subnav.component.html',
  styleUrls: ['./docs-subnav.component.scss']
})
export class DocsSubnavComponent implements OnInit, OnDestroy {

  private navbarEntriesSub: Subscription;
  private routerSub: Subscription;
  private scrollEventSub: Subscription;

  private _activeFragment: string;
  get activeFragment(): string {
    return this._activeFragment;
  }
  set activeFragment(fragment: string) {
    // Set browser url
    this.location.replaceState(this.router
      .createUrlTree([], { fragment: fragment, relativeTo: this.activeRoute })
      .toString());
    this._activeFragment = fragment;
  }

  navbarEntries: SubnavItem[] = [];

  @Input()
  relativeTo: HTMLElement;

  @Input()
  offset = 200;

  constructor(
    private subnav: SubnavService,
    @Inject(NODE_CONFIG) private config: Node[],
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.watchNavbarEntries();
    this.watchRouterFragment();
    this.watchScrollPosition();
  }

  watchNavbarEntries() {
    this.navbarEntriesSub = this.subnav.subnavEntryAdded.subscribe(newItem => {
      this.navbarEntries.push(newItem);
    });
  }

  watchRouterFragment() {
    this.routerSub = this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.activeRoute.fragment.pipe(first()).subscribe(fragment => this._activeFragment = fragment);
    });
  }

  watchScrollPosition() {
    const topOffset = this.relativeTo.getBoundingClientRect().top;
    this.scrollEventSub = fromEvent(window, 'scroll').pipe(
      auditTime(300)
    ).subscribe(() => {
      let currentFocus: SubnavItem;
      // Traverse entries in reverse
      for (let i = this.navbarEntries.length -1; i >= 0; i--) {
        // Check if entry has been scrolled to
        if (this.navbarEntries[i].offsetTop - this.offset < window.pageYOffset - topOffset) {
          currentFocus = this.navbarEntries[i];
          break;
        }
      }
      if (currentFocus) this.activeFragment = currentFocus.node.id;
      else this.activeFragment = undefined;
    });
  }

  ngOnDestroy(): void {
    this.navbarEntriesSub.unsubscribe();
    this.routerSub.unsubscribe();
    this.scrollEventSub.unsubscribe();
    // Set current fragment in history if not latest
    this.activeRoute.fragment.pipe(first()).subscribe(fragment => {
      if (fragment !== this.activeFragment) {
        this.location.replaceState(this.location.path(true));
      }
    });
  }

}
