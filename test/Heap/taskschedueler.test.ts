import { leastTime } from "../../Heap/taskschedueler";

describe("Task Schedueler", () => {
    test("Testcase 1", () => {
        expect(leastTime(["A", "A", "B", "B"], 2)).toBe(5);
    });
    test("Testcase 2", () => {
        expect(leastTime(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
    });
});
