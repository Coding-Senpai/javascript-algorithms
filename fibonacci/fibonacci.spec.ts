import { fibonacci, fibonacciWhile, fibonacciMemo } from "./fibonacci";

test("calculates correct fib value for 3", () => {
  expect(fibonacci(3)).toEqual(2);
});

test("calculates correct fib value for 4", () => {
  expect(fibonacciWhile(4)).toEqual(3);
});

test("calculates correct fib value for 5", () => {
  expect(fibonacciMemo(5)).toEqual(5);
});
