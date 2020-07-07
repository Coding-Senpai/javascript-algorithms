type CharMap = { [key: string]: number };

export const maxChar = (word: string) => {
  const charMap: CharMap = {};
  let max: number = 0;
  let maxChar: string = "";

  for (const char of word) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};
