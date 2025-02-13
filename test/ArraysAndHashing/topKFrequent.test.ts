import { topKFrequent } from "../../ArraysAndHashing/topKFrequent";

describe("topKFrequent", () => {
    test("Example 1", () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
    });
});
