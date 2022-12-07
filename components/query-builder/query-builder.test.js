const { whereClause } = require("./query-builder.js");

test("Test shoud run", () => {
  expect(1).toBe(1);
});

test("Empty where clause should be empty string", () => {
  expect(whereClause()).toBe("");
});

test("Empty where clause should be empty string", () => {
  const expectedResult = "where regexp_like(properties[1].title.en, '(?i)blood in the water|mountain|nonce')";
  const input = ["Blood in the water", "mountAin", "nonce"];
  expect(whereClause(input)).toBe(expectedResult);
});
