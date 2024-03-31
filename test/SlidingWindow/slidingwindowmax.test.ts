import { maxSlidingWindow } from "../../SlidingWindow/slidingwindowmax";

describe("Sliding Window Maximum", () => {
  test("Example 1", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toStrictEqual([3, 3, 5, 5, 6, 7])
  })
});
