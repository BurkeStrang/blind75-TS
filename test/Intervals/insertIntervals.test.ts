import { insertInterval } from "../../Intervals/insterInterval";

describe("insert Interval", () => {
    test("Testcase 1", () => {
        expect(
            insertInterval(
                [
                    [1, 3],
                    [6, 9],
                ],
                [2, 5]
            )
        ).toStrictEqual([
            [1, 5],
            [6, 9],
        ]);
    });
    test("Testcase 2", () => {
        expect(
            insertInterval(
                [
                    [1, 2],
                    [3, 5],
                    [6, 7],
                    [8, 10],
                    [12, 16],
                ],
                [4, 8]
            )
        ).toStrictEqual([
            [1, 2],
            [3, 10],
            [12, 16],
        ]);
    });
    test("Testcase 3", () => {
        expect(insertInterval([[1, 5]], [2, 3])).toStrictEqual([[1, 5]]);
    });
    test("Testcase 4", () => {
        expect(insertInterval([[1, 5]], [2, 7])).toStrictEqual([[1, 7]]);
    });
});
