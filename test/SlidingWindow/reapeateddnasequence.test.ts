import { findRepeatedSequences } from "../../SlidingWindow/repeateddnasequence";

describe("Find repeated sequence", () => {
    test("Example 1", () => {
        expect(findRepeatedSequences("AAAAACCCCCAAAAACCCCCC", 8)).toEqual(
            new Set(["AAAAACCC", "AAAACCCC", "AAACCCCC"])
        );
    });
});
