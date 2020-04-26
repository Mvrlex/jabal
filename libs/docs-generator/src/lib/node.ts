import { ComponentFactory, Type } from "@angular/core";

export class Node {
  id?: string;
  nodes?: (Type<any> | any)[];
  children?: Node[];
}

export class ResolvedNode {
  id: string;
  components: NodeComponent[];
  children: ResolvedNode[];
}

export class NodeComponent {
  factory: ComponentFactory<any>;
  config: any;
}
