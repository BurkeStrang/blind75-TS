import { search } from "../../BinarySearch/binarysearch";

describe("Binary Search", () => {
    test("Example 1", () => {
        expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    });
});
