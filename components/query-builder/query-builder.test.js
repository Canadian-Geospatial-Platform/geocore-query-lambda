const { whereClause } = require("./query-builder.js");

test("Test shoud run", () => {
  expect(1).toBe(1);
});

test("Empty where clause should be empty string", () => {
  expect(whereClause([])).toBe("");
});

test("We should receive a valid where request when using a single item.", () => {
  const expectedResult =
    "where regexp_like(properties[1].title.en, '(?i)mountain')";
  const keywordsArray = ["mountain"];
  expect(whereClause(keywordsArray, "en")).toBe(expectedResult);
});

test("We should receive a valid where request when using multiple items.", () => {
  const expectedResult =
    "where regexp_like(properties[1].title.en, '(?i)blood in the water|mountain|nonce')";
  const keywordsArray = ["blood in the water", "mountain", "nonce"];
  expect(whereClause(keywordsArray, "en")).toBe(expectedResult);
});

test("We should be able to set language code", () => {
  const expectedResult =
    "where regexp_like(properties[1].title.fr, '(?i)blood in the water|mountain|nonce')";
  const keywordsArray = ["blood in the water", "mountain", "nonce"];
  expect(whereClause(keywordsArray, "fr")).toBe(expectedResult);
});
