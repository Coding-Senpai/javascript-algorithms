export class TreeNode {
  children: TreeNode[] = [];

  constructor(public data: number) {
    this.data = data;
    this.children = [];
  }

  add(data: number) {
    this.children.push(new TreeNode(data));
  }
}

export const levelWidth = (root: TreeNode) => {
  const arr: Array<TreeNode | string> = [root, "levelEnd"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (typeof node === "string") {
      counters.push(0);
      arr.push("levelEnd");
    } else {
      arr.push(...node!.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
};
