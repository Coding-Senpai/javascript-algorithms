export const pyramid = (numberOfSteps: number): void => {
  const mid = Math.floor((2 * numberOfSteps - 1) / 2);

  for (let row = 0; row < numberOfSteps; row++) {
    let stair = "";

    for (let column = 0; column < 2 * numberOfSteps - 1; column++) {
      if (mid - row <= column && mid + row >= column) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
};

export const pyramidRecursion = (
  numberOfSteps: number,
  row: number = 0,
  stair: string = ""
): void => {
  if (row === numberOfSteps) {
    return;
  }

  if (stair.length === 2 * numberOfSteps - 1) {
    console.log(stair);
    return pyramidRecursion(numberOfSteps, row + 1);
  }

  const mid = Math.floor((2 * numberOfSteps - 1) / 2);
  let add;
  if (mid - row <= stair.length && mid + row >= stair.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramidRecursion(numberOfSteps, row, stair + add);
};
