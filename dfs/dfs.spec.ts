import { Tree, TreeNode } from "./dfs";

describe("Tree", () => {
  test("Can traverse df", () => {
    const arr: string[] = [];
    const t = new Tree();
    t.root = new TreeNode("a");
    t.root.add("b");
    t.root.add("d");
    t.root.children[0].add("c");

    t.traverseDF((node: TreeNode) => {
      arr.push(node.data);
    });

    expect(arr).toEqual(["a", "b", "c", "d"]);
  });
});
