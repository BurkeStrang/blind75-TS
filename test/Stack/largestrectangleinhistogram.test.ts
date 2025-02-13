import { largestRectangleArea } from "../../Stack/largestrectangleinhistogram";

describe("Largest Rectangle in Histogram", () => {
    test("Case 1", () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    });
});
