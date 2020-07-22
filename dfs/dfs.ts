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

  traverseDF(fn: Function) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      if (node) {
        arr.unshift(...node.children);
      }

      fn(node);
    }
  }
}
