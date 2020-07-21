export class TreeNode {
  children: TreeNode[];
  data: string;

  constructor(data: string) {
    this.data = data;
    this.children = [];
  }

  add(data: string) {
    this.children.push(new TreeNode(data));
  }
}

export class Tree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  traverseBF(fn: Function) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      if (node) {
        arr.push(...node.children);
      }

      fn(node);
    }
  }
}
