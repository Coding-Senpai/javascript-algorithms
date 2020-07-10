import { anagrams, anagramsMap } from "./anagrams";

test('"building" is an anagram of "ngiiubld"', () => {
  expect(anagrams("building", "ngiiubld")).toBeTruthy();
});

test('"Look out!" is an anagram of "out! Look"', () => {
  expect(anagramsMap("Look out!", "out! Look")).toBeTruthy();
});
