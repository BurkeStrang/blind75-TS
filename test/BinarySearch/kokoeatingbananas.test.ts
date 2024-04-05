import { minEatingSpeed } from "../../BinarySearch/kokoeatingbananas";

describe("Koko eating bananas", () => {
  test("Example 1", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4)
  })
});
