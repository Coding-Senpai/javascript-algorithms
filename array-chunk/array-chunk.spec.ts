import { chunkArray, chunkArrayWithSlice } from "./array-chunk";

test("chunkArray correctly divides an array into smaller chunks with specific size", () => {
  expect(chunkArray([2, 3, 4], 2)).toEqual([[2, 3], [4]]);
});

test("chunkArrayWithSlice correctly divides an array into smaller chunks with specific size", () => {
  expect(chunkArrayWithSlice([2, 3, 4, 5], 2)).toEqual([
    [2, 3],
    [4, 5],
  ]);
});
