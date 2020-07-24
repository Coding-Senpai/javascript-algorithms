export const quickSort = (arr: Array<Number>): Array<Number> => {
  if (arr.length <= 1) {
    return arr;
  } else {
    let left: Array<Number> = [];
    let right: Array<Number> = [];
    let newArray: Array<Number> = [];
    var pivot = arr.pop();
    var length = arr.length;

    for (var i = 0; i < length; i++) {
      if (arr[i] <= pivot!) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot!, quickSort(right));
  }
};
