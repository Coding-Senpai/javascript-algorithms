import { reverseInt } from "./reverse-integer";

test("reverseInt reverses provided number", () => {
  expect(reverseInt(-54)).toEqual(-45);
  expect(reverseInt(87)).toEqual(78);
});
