import { Injectable, TemplateRef } from '@angular/core';
import { ResolveStart, Router, RouterEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { InsertionSlot } from "./insertion-slot";
import { InsertionClearingStrategy } from "./insertion-clearing-strategy";

/**
 * This Services enables the {@link InsertionComponent} to render dynamic content through the use of a {@link TemplateRef}.
 * Example:
 * ```
 * @ViewChild('footerButtons', {static: true})
 * private footerButtons: TemplateRef<any>;
 * constructor(private insertionService: InsertionService) { }
 *
 * ngOnInit() {
 *  this.insertionService.render(this.footerButtons);
 * }
 * ```
 */
@Injectable()
export class InsertionService {

  /**
   * All the currently attached slots, that content can be rendered into.
   */
  private slots = new Map<string, InsertionSlot>();

  constructor(private router: Router) {
    this.initOnNavigationClearing();
  }

  /**
   * Allows you to attach a new {@link InsertionSlot} to the Service.
   * This allows you to render to that slot, through calling {@link render}.
   * @param slot - the {@link InsertionSlot} to be attached
   * @param slotId - the identifier of the slot
   */
  attach(slot: InsertionSlot, slotId: string) {
    if (this.slots.get(slotId))
      throw new Error(
        `Slot "${slotId}" was already registered.
        Please specify a unique identifier.`
      );
    else
      this.slots.set(slotId, slot);
  }

  /**
   * Detaches the {@link InsertionSlot} with the specified identifier.
   * @param slotId - the identifier of the slot
   */
  detach(slotId: string) {
    if (this.slots.get(slotId)) {
      this.slots.delete(slotId);
    } else {
      throw new Error(
        `Slot "${slotId}" does not exist.`
      );
    }
  }

  /**
   * Renders a {@link TemplateRef} into the specified {@link InsertionSlot}, like the {@link InsertionComponent}.
   * If the clearing strategy is set to {@link InsertionClearingStrategy.ON_RENDER} or
   * {@link InsertionClearingStrategy.BOTH} it will clear the content before rendering.
   * @param templateRef - the content to render
   * @param slotId - the slot into which to render the content
   * @return name of the newly rendered slot
   */
  render(templateRef: TemplateRef<any>, slotId = 'default'): string {
    const slot: InsertionSlot = this.slots.get(slotId);
    if (slot) {
      if (
        slot.clearingStrategy === InsertionClearingStrategy.ON_RENDER ||
        slot.clearingStrategy === InsertionClearingStrategy.BOTH
      ) slot.clear();
      slot.render(templateRef);
      return slotId;
    } else {
      throw new Error(
        `Slot "${slotId}" does not exist.`
      );
    }
  }

  /**
   * Clears rendered content from the {@link InsertionSlot}.
   * @param slotIds - the slots which to clear the content from.
   */
  clear(...slotIds: string[]) {
    for (const slotId of slotIds) {
      const slot: InsertionSlot = this.slots.get(slotId);
      if (slot) {
        slot.clear();
      } else {
        throw new Error(
          `Slot "${slotId}" does not exist.`
        );
      }
    }
  }

  /**
   * Checks if a {@link InsertionSlot} is currently rendering.
   * @param slotId - the id of the slot to check the status from.
   */
  isActive(slotId: string) {
    const slot: InsertionSlot = this.slots.get(slotId);
    if (slot) {
      return slot.isActive;
    } else {
      throw new Error(
        `Slot "${slotId}" does not exist.`
      );
    }
  }

  /**
   * Subscribes to Events from the Router for the clearing strategy
   * {@link InsertionClearingStrategy.ON_NAV} or {@link InsertionClearingStrategy.BOTH}.
   */
  private initOnNavigationClearing() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof ResolveStart)
    ).subscribe(() => {
      for (const [key, slot] of this.slots) {
        if (
          slot.clearingStrategy === InsertionClearingStrategy.ON_NAV ||
          slot.clearingStrategy === InsertionClearingStrategy.BOTH
        ) slot.clear();
      }
    });
  }

}
