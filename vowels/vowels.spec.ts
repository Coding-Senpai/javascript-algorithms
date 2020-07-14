import { vowels, vowelsRegex } from "./vowels";

test("vowels function returns the number of vowels used", () => {
  expect(vowels("aeiou")).toEqual(5);
});

test("vowelsRegex returns the number of vowels used", () => {
  expect(vowelsRegex("I am a programmer")).toEqual(6);
});
