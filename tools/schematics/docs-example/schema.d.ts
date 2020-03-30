export interface Schema {
  name: string;
  project?: string;
  /** @internal will be set during path resolution */
  component?: string;
  /** @internal will be set during path resolution */
  path?: string;
  /** @internal will be set during name resolution */
  componentName?: string;
  /** @internal will be set during name resolution */
  docPagePath?: string;
}
