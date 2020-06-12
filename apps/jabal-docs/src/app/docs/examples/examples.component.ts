import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BreakpointService, InsertionService } from "@jabal/jabal";

@Component({
  selector: 'jabal-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  readonly data = {
    name: 'Vivekananda School',
    location : 'Delhi',
    established : {
      year: 1998,
      month: 'test'
    }
  };

  constructor(
    private breakpointService: BreakpointService
  ) { }

  ngOnInit() {
    this.breakpointService.breakpointChange.subscribe((breakpoint) => {
      console.log(breakpoint);
    })
  }

}
