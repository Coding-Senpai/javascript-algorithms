import { quickSort } from "./quick-sort";

const arr = [4, 7, 1, 8, 6, 2, 9, 3, 0, 5];
const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

test("sorts an array", () => {
  expect(quickSort(arr)).toEqual(sortedArray);
});
