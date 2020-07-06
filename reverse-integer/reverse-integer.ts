export const reverseInt = (num: number) => {
  return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
};
