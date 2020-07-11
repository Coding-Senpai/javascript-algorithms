import { capitalize, capitalizeSimple } from "./capitalize";

test("Capitalize first letter of each word", () => {
  expect(capitalize("i am a programmer")).toEqual("I Am A Programmer");
});

test("Capitalize first letter of each word with capitalizeSimple", () => {
  expect(capitalizeSimple("i am a doctor")).toEqual("I Am A Doctor");
});
