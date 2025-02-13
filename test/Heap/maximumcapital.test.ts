import { maximumCapital } from "../../Heap/maximumcapital";

describe("Task Schedueler", () => {
    test("Testcase 1", () => {
        const capitals = [1, 1, 2];
        const profits = [1, 2, 3];
        const k = 1;
        const c = 0;
        const expected = 0;
        const result = maximumCapital(c, k, capitals, profits);
        expect(result).toBe(expected);
    });
    test("Testcase 2", () => {
        const capitals = [1, 2, 2, 3];
        const profits = [2, 4, 6, 8];
        const k = 2;
        const c = 1;
        const expected = 11;
        const result = maximumCapital(c, k, capitals, profits);
        expect(result).toBe(expected);
    });
});
