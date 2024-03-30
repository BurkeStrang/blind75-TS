import { isValid } from "../../Stack/validparentheses";

describe("Valid Parentheses", () => {
  test("isValid", () => {
    expect(isValid("()")).toBe(true)
  })
});
