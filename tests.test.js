import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from "./tests.js";

test("capitalize should return 'Hello world'", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("reverse string should return 'dlrow olleh", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("calculator add operator should return 5", () => {
  expect(calculator(3, 2, "+")).toBe(5);
});

test("calculator subtract operator should return -1", () => {
  expect(calculator(3, 2, "-")).toBe(1);
});

test("calculator multiply operator should return 6", () => {
  expect(calculator(3, 2, "*")).toBe(6);
});

test("calculator divide operator should return 1.5", () => {
  expect(calculator(3, 2, "/")).toBe(1.5);
});

test("ceasarCipher should return 'khoor'", () => {
  expect(ceasarCipher("hello world", 3)).toBe("khoor zruog");
});

test("analyzeArray should return { average: 3, min: 1, max: 4, length: 5 }", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
