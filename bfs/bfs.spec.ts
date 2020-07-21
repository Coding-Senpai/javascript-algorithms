import { Tree, TreeNode } from "./bfs";

describe("Tree", () => {
  test("Can traverse bf", () => {
    const arr: string[] = [];
    const t = new Tree();
    t.root = new TreeNode("a");
    t.root.add("b");
    t.root.add("c");
    t.root.children[0].add("d");

    t.traverseBF((node: TreeNode) => {
      arr.push(node.data);
    });

    expect(arr).toEqual(["a", "b", "c", "d"]);
  });
});
