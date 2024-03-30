import { minWindow } from "../../SlidingWindow/minimumwindowsubstring";

describe('Minimum Window Substring', () => {
  test('minWindow', () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toStrictEqual("BANC")
  })
});
