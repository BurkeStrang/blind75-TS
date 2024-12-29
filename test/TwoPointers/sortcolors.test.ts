import { sortColors } from "../../TwoPointers/sortcolors";

describe("sortColors", () => {
  test("should sort [2, 0, 1] to [0, 1, 2]", () => {
    expect(sortColors([2, 0, 1])).toEqual([0, 1, 2]);
  });

  // Existing test cases can be here
  test("should sort [2,0,2,1,1,0] to [0,0,1,1,2,2]", () => {
    expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
  });
});
