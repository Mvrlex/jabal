import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Scroll } from "@angular/router";
import { ViewportScroller } from "@angular/common";

import { JabalModule } from "@jabal/jabal";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBug, faChevronRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { filter, observeOn } from "rxjs/operators";
import { asyncScheduler } from "rxjs";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'docs', loadChildren: () => import('./docs/docs.module').then((m) => m.DocsModule)},
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: '**', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)}
    ], {
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
      scrollOffset: [0, 64],
      onSameUrlNavigation: 'reload'
    }),
    FontAwesomeModule,
    JabalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
      iconLibrary: FaIconLibrary,
      private router: Router,
      private viewportScroller: ViewportScroller
  ) {

    // Register icons for the app
    iconLibrary.addIcons(faBug, faGithub, faBootstrap, faDownload, faChevronRight);

    /*
     * FIXME: This is a workaround for a underlying issue with the angular anchor scrolling.
     *  Pretty annoying that such a seemingly simple feature still doesn't work correctly.
     * https://github.com/angular/angular/issues/24547
     */
    router.events.pipe(
      filter((e): e is Scroll => e instanceof Scroll),
      observeOn(asyncScheduler)
    ).subscribe(e => {
      if (e.anchor) {
        viewportScroller.scrollToAnchor(e.anchor);
      } else {
        viewportScroller.scrollToPosition(e.position ? e.position : [0, 0]);
      }
    });

  }

}
