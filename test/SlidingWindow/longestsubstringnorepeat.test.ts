import { lengthOfLongestSubstring } from "../../SlidingWindow/longestsubstringnorepeat";

describe("lengthOfLongestSubstring", () => {
    test("Example test case 1", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    });
    test("Example test case 2", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    });
});
