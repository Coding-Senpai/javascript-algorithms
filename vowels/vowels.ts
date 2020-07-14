export const vowels = (text: string) => {
  let count = 0;
  const vowelsArray = ["a", "e", "i", "o", "u"];

  for (let char of text.toLowerCase()) {
    if (vowelsArray.includes(char)) {
      count++;
    }
  }

  return count;
};

export const vowelsRegex = (text: string) => {
  const matches = text.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
