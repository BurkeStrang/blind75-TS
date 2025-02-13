// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
//
//
// Example 1:
//
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
//
// Input: n = 1
// Output: ["()"]

function generateParenthesis(n: number): string[] {
    const stack: string[] = [];
    const res: string[] = [];

    function backtrack(openN: number, closedN: number) {
        if (openN === n && closedN === n) {
            res.push(stack.join(""));
            return;
        }

        if (openN < n) {
            stack.push("(");
            backtrack(openN + 1, closedN);
            stack.pop();
        }

        if (closedN < openN) {
            stack.push(")");
            backtrack(openN, closedN + 1);
            stack.pop();
        }
    }

    backtrack(0, 0);

    return res;
}

export { generateParenthesis };
