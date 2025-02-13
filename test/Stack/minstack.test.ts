import { MinStack } from "../../Stack/minstack";

describe("MinStack", () => {
    test("defined", () => {
        expect(MinStack).toBeDefined();
    });
    test("push", () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.getMin()).toBe(-3);
    });
});
