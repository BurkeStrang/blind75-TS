import { mergeIntervals } from "../../Intervals/mergeIntervals";

describe("mergIntervals Tests", () => {
    test("Testcase 1", () => {
        expect(
            mergeIntervals([
                [1, 3],
                [2, 6],
                [8, 10],
                [15, 18],
            ])
        ).toStrictEqual([
            [1, 6],
            [8, 10],
            [15, 18],
        ]);
    });
    test("Testcase 2", () => {
        expect(
            mergeIntervals([
                [1, 4],
                [4, 5],
            ])
        ).toStrictEqual([[1, 5]]);
    });
});
