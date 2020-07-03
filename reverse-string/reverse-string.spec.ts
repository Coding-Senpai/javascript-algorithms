import {
  reverseStringReverse,
  reverseStringForLoop,
  reverseStringReduce,
} from "./reverse-string";

test("reverseStringReverse reverses provided text", () => {
  expect(reverseStringReverse("abc")).toEqual("cba");
});

test("reverseStringForLoop reverses provided text", () => {
  expect(reverseStringForLoop("abc")).toEqual("cba");
});

test("reverseStringReduce reverses provided text", () => {
  expect(reverseStringReduce("abc")).toEqual("cba");
});
