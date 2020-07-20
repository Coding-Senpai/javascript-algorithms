export const mergeSort = (arr: Array<Number>): Array<Number> => {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: Array<Number>, right: Array<Number>): Array<Number> => {
  const results: Array<Number> = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(<Number>left.shift());
    } else {
      results.push(<Number>right.shift());
    }
  }

  return [...results, ...left, ...right];
};
