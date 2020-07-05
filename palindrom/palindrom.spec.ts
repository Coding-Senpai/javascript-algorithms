import { isPalindrom, isPalindromEvery, isPalindromLoop } from "./palindrom";

test("isPalindrom returns true for a word which is a palindrom", () => {
  expect(isPalindrom("abba")).toEqual(true);
});

test("isPalindromEvery returns true for a word which is a palindrom", () => {
  expect(isPalindromEvery("kayak")).toEqual(true);
});

test("isPalindromLoop returns true for a word which is a palindrom", () => {
  expect(isPalindromLoop("level")).toEqual(true);
});
