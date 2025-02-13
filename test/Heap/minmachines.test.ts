import { minMachines } from "../../Heap/minmachines";

describe("Task Schedueler", () => {
    test("Testcase 1", () => {
        const tasksListExample = [
            [1, 4],
            [2, 5],
            [7, 9],
        ];
        const result = minMachines(tasksListExample);
        expect(result).toBe(2);
    });
    test("Testcase 2", () => {
        const tasksListExample = [
            [2, 6],
            [2, 3],
            [3, 4],
        ];
        const result = minMachines(tasksListExample);
        expect(result).toBe(2);
    });
});
