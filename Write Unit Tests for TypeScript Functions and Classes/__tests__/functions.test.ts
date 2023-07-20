import { capitalize, multiply, findMax, sumArray } from "../functions";

test("capitalize function capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("findMax should return the maximum value from an array of numbers", () => {
  expect(findMax([3, 7, 2, 10, 5])).toBe(10);
});

test("findMax should return the maximum value from an array of negative numbers", () => {
  expect(findMax([-3, -7, -2, -10, -5])).toBe(-2);
});

test("sumArray should return the sum of all elements in an array of numbers", () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
});

test("sumArray should return the same number when the array has only one element", () => {
  expect(sumArray([42])).toBe(42);
});
