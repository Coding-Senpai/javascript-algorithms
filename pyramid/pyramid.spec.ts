import { pyramid, pyramidRecursion } from "./pyramid";

let consoleLogSpy: jest.SpyInstance;

test("pyramid called with 2", () => {
  pyramid(2);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual(" # ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual("###");
  expect(consoleLogSpy.mock.calls.length).toEqual(2);
});

test("pyramidRecursion called with 3", () => {
  pyramidRecursion(3);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual("  #  ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual(" ### ");
  expect(consoleLogSpy.mock.calls[2][0]).toEqual("#####");
  expect(consoleLogSpy.mock.calls.length).toEqual(3);
});

beforeEach(() => {
  consoleLogSpy = jest.spyOn(console, "log");
});

afterEach(() => {
  consoleLogSpy.mockRestore();
});
