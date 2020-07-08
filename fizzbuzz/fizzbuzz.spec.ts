import { fizzBuzz } from "./fizzbuzz";

let consoleLogSpy: jest.SpyInstance;

test("Calling fizzbuzz with 15 prints out the correct values", () => {
  fizzBuzz(15);

  expect(consoleLogSpy.mock.calls[0][0]).toEqual(1);
  expect(consoleLogSpy.mock.calls[1][0]).toEqual(2);
  expect(consoleLogSpy.mock.calls[2][0]).toEqual("fizz");
  expect(consoleLogSpy.mock.calls[3][0]).toEqual(4);
  expect(consoleLogSpy.mock.calls[4][0]).toEqual("buzz");
  expect(consoleLogSpy.mock.calls[5][0]).toEqual("fizz");
  expect(consoleLogSpy.mock.calls[6][0]).toEqual(7);
  expect(consoleLogSpy.mock.calls[7][0]).toEqual(8);
  expect(consoleLogSpy.mock.calls[8][0]).toEqual("fizz");
  expect(consoleLogSpy.mock.calls[9][0]).toEqual("buzz");
  expect(consoleLogSpy.mock.calls[10][0]).toEqual(11);
  expect(consoleLogSpy.mock.calls[11][0]).toEqual("fizz");
  expect(consoleLogSpy.mock.calls[12][0]).toEqual(13);
  expect(consoleLogSpy.mock.calls[13][0]).toEqual(14);
  expect(consoleLogSpy.mock.calls[14][0]).toEqual("fizzbuzz");
});

beforeEach(() => {
  consoleLogSpy = jest.spyOn(console, "log");
});

afterEach(() => {
  consoleLogSpy.mockRestore();
});
