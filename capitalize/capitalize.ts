import { resourceUsage } from "process";

export const capitalize = (text: string) => {
  const words = [];

  for (const word of text.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
};

export const capitalizeSimple = (text: string) => {
  let capitalizedText = text[0].toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i - 1] === " ") {
      capitalizedText += text[i].toUpperCase();
    } else {
      capitalizedText += text[i];
    }
  }

  return capitalizedText;
};
