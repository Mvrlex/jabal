export interface Schema {
  name: string;
  project?: string;
  /** @internal will be set during path resolution */
  path?: string;
}
