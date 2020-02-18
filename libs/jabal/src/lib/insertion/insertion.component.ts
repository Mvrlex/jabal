import { Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { InsertionService } from "./insertion.service";
import { InsertionSlot } from "./insertion-slot";
import { InsertionClearingStrategy } from "./insertion-clearing-strategy";

/**
 * A {@link InsertionSlot} which can dynamically render content.
 * Use the {@link InsertionService} to render a {@link TemplateRef} into this component.
 *
 * This is a sample implementation of the {@link InsertionSlot}, you can implement your own by implementing the {@link InsertionSlot} interface.
 * This will allow you to dynamically render content into any component.
 */
@Component({
  selector: 'jbl-insertion',
  template: `<ng-container #slot></ng-container>`
})
export class InsertionComponent implements OnInit, OnDestroy, InsertionSlot {

  @ViewChild('slot', {read: ViewContainerRef, static: true})
  insertionSlot: ViewContainerRef;

  @Input()
  slotName = 'default';

  @Input()
  clearingStrategy: InsertionClearingStrategy = InsertionClearingStrategy.ON_NAV;

  constructor(private insertion: InsertionService) {}

  ngOnInit() {
    this.insertion.attach(this, this.slotName);
  }

  ngOnDestroy() {
    this.insertion.detach(this.slotName);
  }

  render(tRef: TemplateRef<any>) {
    this.insertionSlot.createEmbeddedView(tRef);
  }

  clear() {
    this.insertionSlot.clear();
  }

}
