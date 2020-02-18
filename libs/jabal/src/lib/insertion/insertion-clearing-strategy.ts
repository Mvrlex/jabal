/**
 * Clearing strategy for the dynamically rendered content inside of the footer.
 * Default is {@link InsertionClearingStrategy.ON_RENDER}.
 * See also:
 * {@link InsertionClearingStrategy.ON_NAV}
 * {@link InsertionClearingStrategy.NONE}
 */
export enum InsertionClearingStrategy {
  /**
   * Clear when new content is getting rendered.
   */
  ON_RENDER = 'render',
  /**
   * Clear on every navigation.
   */
  ON_NAV = 'nav',
  /**
   * Both {@link ON_RENDER} and {@link ON_NAV}.
   */
  BOTH = 'both',
  /**
   * Do not clear, but append the rendered content.
   * This can be used for custom clearing rules.
   */
  APPEND = 'append'
}
