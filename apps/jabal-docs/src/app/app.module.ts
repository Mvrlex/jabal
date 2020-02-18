import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeModule } from "./home/home.module";
import { ErrorModule } from "./error/error.module";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBug, faChevronRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { BrandModule, NavbarModule } from "@jabal/jabal";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    ErrorModule,
    RouterModule.forRoot([
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'docs', loadChildren: () => import('./docs/docs.module').then((m) => m.DocsModule) },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) }
    ]),
    FontAwesomeModule,
    NavbarModule,
    BrandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(faBug, faGithub, faBootstrap, faDownload, faChevronRight);
  }
}
