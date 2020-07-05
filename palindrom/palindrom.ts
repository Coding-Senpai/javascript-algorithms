export const isPalindrom = (word: string) => {
  const reversedWord = word.split("").reverse().join("");

  return word === reversedWord;
};

export const isPalindromEvery = (word: string) => {
  return word.split("").every((character: string, i: number) => {
    return character === word[word.length - i - 1];
  });
};

export const isPalindromLoop = (word: string) => {
  const len = word.length;

  for (var i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }

  return true;
};
