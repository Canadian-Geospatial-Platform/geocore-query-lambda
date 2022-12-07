const { whereClause } = require("./query-builder.js");

test("Test shoud run", () => {
  expect(1).toBe(1);
});

test("Empty where clause should be empty string", () => {
  expect(whereClause()).toBe("");
});

test("We should receive a valid where request.", () => {
  const expectedResult = "where regexp_like(properties[1].title.en, '(?i)blood in the water|mountain|nonce')";
  const keywordsArray = ["blood in the water", "mountain", "nonce"];
  expect(whereClause(keywordsArray, "en")).toBe(expectedResult);
});

test("We should be able to set language code", () => {
  const expectedResult = "where regexp_like(properties[1].title.fr, '(?i)blood in the water|mountain|nonce')";
  const keywordsArray = ["blood in the water", "mountain", "nonce"];
  expect(whereClause(keywordsArray, "fr")).toBe(expectedResult);
});
