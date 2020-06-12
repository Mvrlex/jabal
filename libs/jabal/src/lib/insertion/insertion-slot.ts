import { TemplateRef, ViewContainerRef } from "@angular/core";
import { InsertionClearingStrategy } from "./insertion-clearing-strategy";

/**
 * Interface which represents a slot into which content can dynamically be rendered into.
 * See also: {@link InsertionComponent}
 */
export interface InsertionSlot {
  /**
   * Specify {@link InsertionClearingStrategy} for the dynamic content.
   */
  clearingStrategy: InsertionClearingStrategy;
  /**
   * Function for rendering the new {@link TemplateRef}.
   * @param vcRef - the {@link ViewContainerRef} where content will be rendered to
   * @param tRef - the {@link TemplateRef} that will be rendered
   */
  render: (tRef: TemplateRef<any>) => void;
  /**
   * Function for clearing the redered content.
   */
  clear: () => void;
  /**
   * If the slot is currently rendering a view.
   */
  isActive: boolean;
}
