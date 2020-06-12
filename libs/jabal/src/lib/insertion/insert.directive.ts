import { Directive, Input, OnInit, TemplateRef } from '@angular/core';
import { InsertionService } from "./insertion.service";

@Directive({
  selector: '[jblInsert]'
})
export class InsertDirective implements OnInit {
  private currentSlots: string[];

  @Input()
  set jblInsert(slotIds: string[] | string) {
    if (!Array.isArray(slotIds)) slotIds = [slotIds];
    slotIds.forEach((slotId) => {
      if (!this.insertionService.isActive(slotId)) {
        this.insertionService.render(this.templateRef, slotId);
      }
    });
    this.currentSlots = slotIds;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private insertionService: InsertionService
  ) { }

  ngOnInit(): void {
    if (!this.currentSlots)
      this.insertionService.render(this.templateRef);
  }

}
