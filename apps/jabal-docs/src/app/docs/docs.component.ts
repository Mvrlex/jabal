import { Component, OnInit } from '@angular/core';
import { RouteData, RouterDataService } from "@jabal/jabal";

@Component({
  selector: 'jabal-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  componentRoutes: RouteData[] = [];

  constructor(private routerData: RouterDataService) {}

  ngOnInit(): void {
    this.componentRoutes = this.routerData.getDataFromChildren(
      this.routerData.resolve('/docs/components'),
      'component'
    );
  }

}
