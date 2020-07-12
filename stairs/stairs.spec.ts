import { stairsLoop, stairsRecursion } from "./stairs";

let consoleLogSpy: jest.SpyInstance;

test("stairsLoop called with 2", () => {
  stairsLoop(2);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual("# ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual("##");
  expect(consoleLogSpy.mock.calls.length).toEqual(2);
});

test("stairsRecursion called with 2", () => {
  stairsRecursion(3);
  expect(consoleLogSpy.mock.calls[0][0]).toEqual("#  ");
  expect(consoleLogSpy.mock.calls[1][0]).toEqual("## ");
  expect(consoleLogSpy.mock.calls[2][0]).toEqual("###");
  expect(consoleLogSpy.mock.calls.length).toEqual(3);
});

beforeEach(() => {
  consoleLogSpy = jest.spyOn(console, "log");
});

afterEach(() => {
  consoleLogSpy.mockRestore();
});
