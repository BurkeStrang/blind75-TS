import { generateParenthesis } from "../../Stack/generateparentheses";

describe('Generate Parentheses', () => {
  test('Example 1', () => {
    expect(generateParenthesis(3)).toStrictEqual(["((()))", "(()())", "(())()", "()(())", "()()()"])
  })
});
