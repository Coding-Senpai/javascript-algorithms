export const chunkArray = (arr: number[], chunk: number) => {
  let chunkedArray: number[][] = [];

  for (let num of arr) {
    const lastChunk = chunkedArray[chunkedArray.length - 1];

    if (!lastChunk || lastChunk.length === chunk) {
      chunkedArray.push([num]);
    } else {
      lastChunk.push(num);
    }
  }

  return chunkedArray;
};

export const chunkArrayWithSlice = (arr: number[], chunk: number) => {
  let chunkedArray: number[][] = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + chunk));
    index += chunk;
  }

  return chunkedArray;
};
