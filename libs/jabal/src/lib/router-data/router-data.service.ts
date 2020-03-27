import { ActivatedRoute, PRIMARY_OUTLET, Route, Router, UrlSegment } from "@angular/router";

import { RouteData } from "./route-data";
import { Injectable, NgModuleRef } from "@angular/core";

@Injectable()
export class RouterDataService {

  constructor(private router: Router) {}

  /**
   * Resolves a url string to a {@link Route}. This gives you access to the route-data, component, and other data of the specified route.
   *
   * The resolving starts from the root route and works its way downward.
   * It will ignore redirects, but will traverse through empty routes.
   * Lazy loaded routes are traversed as well, but they have to be already loaded.
   *
   * @param url - url string starting from the root path
   * @param outlet - outlet to search through ({@link PRIMARY_OUTLET} by default)
   */
  resolve(url: string, outlet: string = PRIMARY_OUTLET): Route {
    const searchUrl: string[] = this.router.parseUrl(url).root.children[outlet].segments.map((segment: UrlSegment) => segment.path);
    let routes = this.router.config;
    for (let i = 0; i < searchUrl.length; i++) {
      const matchingRoute = routes.find((route: Route) => {
        if (searchUrl[i] === route.path) return true;
        else if (!route.redirectTo && route.path === '') { i--; return true; } // Traverse through empty route and repeat iteration
        else return false;
      });
      if (!matchingRoute) return null; // Couldn't match any route
      else if (searchUrl.length -1 === i) return matchingRoute; // Reached end of search string
      else if (matchingRoute.children) routes = matchingRoute.children; // Children available
      else if (matchingRoute['_loadedConfig']) routes = (matchingRoute['_loadedConfig'] as LoadedRouterConfig).routes; // Lazy loaded config available
    }
    return null;
  }

  /**
   * Traverses the router-tree starting from the specified {@link ActivatedRoute} and creates a list of all data elements with the specified name it found on the way.
   * This is most commonly used for breadcrumbs.
   * @param route - the route from which to build the current data collection
   * @param dataName - the property name of the data
   * @param url - the current url string
   * @param collectedData - the currently collected data
   */
  getDataFromTraverse(route: ActivatedRoute, dataName: string, url: string = '', collectedData: RouteData[] = []): RouteData[] {
    // Update URL
    const currentPath = route.routeConfig ? route.routeConfig.path : '';
    const currentFullUrl = currentPath ? `${url}/${currentPath}` : url;
    // Read data
    const currentData = this.getData(route, dataName);
    if (currentData)
      collectedData.push({ data: currentData, url: currentFullUrl });
    // Next
    if (route.firstChild)
      return this.getDataFromTraverse(route.firstChild, dataName, currentFullUrl, collectedData);
    // End
    return collectedData;
  }

  /**
   * Traverses through all children of a {@link Route} and gets its appropriate data.
   * This can be useful for dynamic navbars.
   * @param route - the {@link Route} to search
   * @param dataName - property name of the data to get
   */
  getDataFromChildren(route: Route, dataName: string): RouteData[] {
    const collectedData = [];
    for (const childRoute of route.children) {
      const currentData = this.getData(childRoute, dataName);
      if (currentData)
        collectedData.push({ data: currentData, url: childRoute.path });
    }
    return collectedData;
  }

  /**
   * Safely gets data from a {@link ActivatedRoute} or {@link Route}.
   * Returns null if nothing could be found.
   * @param route - {@link ActivatedRoute} or {@link Route} to get data from
   * @param dataName - property name of the data to get
   */
  getData(route: ActivatedRoute | Route, dataName: string): any {
    if (route instanceof ActivatedRoute) route = route.routeConfig;
    if (route && route.data && route.data[dataName]) {
      return route.data[dataName];
    } else {
      return null;
    }
  }

}

/**
 * Lazy loaded router config.
 * This is internally used by Angular.
 */
export interface LoadedRouterConfig {
  routes: Route[];
  module: NgModuleRef<any>;
}
