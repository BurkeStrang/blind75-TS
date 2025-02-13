import { checkInclusion } from "../../SlidingWindow/permutationinstring";

describe("Permutation in String", () => {
    test("Example 1", () => {
        expect(checkInclusion("ab", "eidbaooo")).toBe(true);
    });
});
