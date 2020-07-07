import { maxChar } from "./maxchar";

test("maxChar returns the maximum occurring character in the input string", () => {
  expect(maxChar("abbaa")).toEqual("a");
});
