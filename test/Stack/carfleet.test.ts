import { carFleet } from "../../Stack/carfleet";

describe("Car Fleet", () => {
    test("Example 1", () => {
        expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toStrictEqual(3);
    });
    test("Example 2", () => {
        expect(carFleet(10, [3], [3])).toStrictEqual(1);
    });
    test("Example 3", () => {
        expect(carFleet(100, [0, 2, 4], [4, 2, 1])).toStrictEqual(1);
    });
});
