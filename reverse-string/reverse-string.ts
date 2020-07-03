export const reverseStringReverse = (textToReverse: string) => {
  return textToReverse.split("").reverse().join("");
};

export const reverseStringForLoop = (textToReverse: string) => {
  let reversedText = "";

  for (const character of textToReverse) {
    reversedText = character + reversedText;
  }

  return reversedText;
};

export const reverseStringReduce = (textToReverse: string) => {
  return textToReverse
    .split("")
    .reduce(
      (reversedText: string, character: string) => character + reversedText,
      ""
    );
};
