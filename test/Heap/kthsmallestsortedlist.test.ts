import { kSmallestNumber } from "../../Heap/kthsmallestsortedlist";

describe("Task Schedueler", () => {
    test("Testcase 1", () => {
        const matrix = [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15],
        ];
        const k = 8;
        expect(kSmallestNumber(matrix, k)).toEqual(13);
    });
    test("Testcase 2", () => {
        const matrix = [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15],
        ];
        const k = 4;
        expect(kSmallestNumber(matrix, k)).toEqual(10);
    });
    test("Testcase 3", () => {
        const matrix = [
            [1, 5, 9],
            [10, 11, 13],
            [12, 13, 15],
        ];
        const k = 1;
        expect(kSmallestNumber(matrix, k)).toEqual(1);
    });
});
