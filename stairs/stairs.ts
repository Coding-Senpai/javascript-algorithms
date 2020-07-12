export const stairsLoop = (numberOfStairs: number): void => {
  for (let row = 0; row < numberOfStairs; row++) {
    let stair = "";

    for (let column = 0; column < numberOfStairs; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
};

export const stairsRecursion = (
  numberOfSteps: number,
  row: number = 0,
  stair: string = ""
): void => {
  if (row === numberOfSteps) {
    return;
  }

  if (stair.length === numberOfSteps) {
    console.log(stair);
    return stairsRecursion(numberOfSteps, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  stairsRecursion(numberOfSteps, row, stair + add);
};
