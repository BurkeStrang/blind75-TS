import { threeSum } from "../../TwoPointers/threesum";

describe("ThreeSum", () => {
    test("Example test case 1", () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
            [-1, -1, 2],
            [-1, 0, 1],
        ]);
    });
});
