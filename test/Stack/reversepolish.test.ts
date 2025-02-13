import { evalRPN } from "../../Stack/reversepolish";

describe("evalRPN", () => {
    test("evalRPN", () => {
        expect(evalRPN(["2", "1", "+", "3", "*"])).toStrictEqual(9);
    });
});
