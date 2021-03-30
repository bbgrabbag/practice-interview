const main = require("./main");

const runTest = (f, method) => ([inputs, expected]) => {
  const actual = f(...inputs);
  expect(actual)[method](expected);
};

describe("Practice Interview", () => {
  describe("Common Letter", () => {
    it("Should output an array of the characters which occur most often", () => {
      const cases = [
        [[""], []],
        [["abc"], ["a", "b", "c"]],
        [["aabc"], ["a"]],
        [["aabbc"], ["a", "b"]],
      ];
      cases.forEach((c) => runTest(main.commonLetter, "toEqual")(c));
    });
  });

  describe("Sort Characters", () => {
    it("Should output a string with characters sorted", () => {
      const cases = [
        [[""], ''],
        [["bca"], 'abc'],
        [["test"], 'estt'],
        [["hello"], 'ehllo'],
      ];
      cases.forEach((c) => runTest(main.sortCharacters, "toBe")(c));
    });
  });

  describe("Validate Brackets", () => {
    it("Should determine whether bracket placements are valid", () => {
      const cases = [
        [[""], true],
        [["()"], true],
        [["()()"], true],
        [["()(())"], true],
        [["(()(()))"], true],
        [["(()"], false],
        [[")"], false],
        [["()()(("], false],
      ];
      cases.forEach((c) => runTest(main.validateBrackets, "toBe")(c));
    });
  });
});
