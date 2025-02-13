import { productofArrayExceptSelf } from "../../ArraysAndHashing/productofArrayExceptSelf";

describe("productofArrayExceptSelf", () => {
    test("Example 1", () => {
        expect(productofArrayExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
    });
});
