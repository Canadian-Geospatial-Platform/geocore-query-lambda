const { whereClause } = require("./query-builder.js");

test("Test shoud run", () => {
  expect(1).toBe(1);
});

test("Empty where clause should be empty string", () => {
  expect(whereClause()).toBe("");
});

test("Empty where clause should be empty string", () => {
  const expectedResult = "where blood in the water and mountain and nonce";
  const input = ["Blood in the water", "mountAin", "nonce"];
  expect(whereClause(input)).toBe(expectedResult);
});
