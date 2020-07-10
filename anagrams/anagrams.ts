type CharMap = { [key: string]: number };

export const anagramsMap = (stringA: string, stringB: string): boolean => {
  const aCharMap: CharMap = buildCharMap(stringA);
  const bCharMap: CharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
};

const buildCharMap = (text: string) => {
  const charMap: CharMap = {};

  for (let char of text.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

export const anagrams = (wordA: string, wordB: string): boolean => {
  return (
    sortAndRemoveNonWordCharacters(wordA) ===
    sortAndRemoveNonWordCharacters(wordB)
  );
};

const sortAndRemoveNonWordCharacters = (word: string): string => {
  return word.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};
