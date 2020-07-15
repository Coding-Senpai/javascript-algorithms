export const fibonacci = (num: number) => {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[num];
};

export const fibonacciWhile = (num: number) => {
  let a = 1,
    b = 0,
    temp;

  while (num >= 1) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

const memoize = (fn: Function) => {
  const cache: { [key: number]: number } = {};
  return function (...args: any[]) {
    const num: number = args[0];
    if (cache[num]) {
      return cache[num];
    }

    const result = fn.apply(fn, args);
    cache[num] = result;

    return result;
  };
};

const fibonacciWithoutMemo = (num: number): number => {
  if (num < 2) {
    return num;
  }

  return fibonacciMemo(num - 1) + fibonacciMemo(num - 2);
};

export const fibonacciMemo = memoize(fibonacciWithoutMemo);
