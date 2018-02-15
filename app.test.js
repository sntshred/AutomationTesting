const sum = require("./app");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Depending up on Sum functio", () => {
  expect(somemore()).toBe(9);
});
