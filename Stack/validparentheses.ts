// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
// Example 1:
//
// Input: s = "()"
// Output: true
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
// Example 3:
//
// Input: s = "(]"
// Output: false

function isValid(s: string): boolean {
  const closingToOpening: { [key: string]: string } = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const stack: string[] = [];
  const chars: string[] = s.split('');

  for (let i = 0; i < chars.length; i++) {
    const element = chars[i];
    if (element in closingToOpening) {
      const pop = stack.pop();

      if (closingToOpening[element] === pop) {
        continue;
      } else {
        return false;
      }
    } else {
      stack.push(element);
    }
  }

  if (stack.length > 0) return false;

  return true;
}

export { isValid };

