/**
 * Determines if a number is a happy number.
 *
 * @param n Number to check if it is a happy number.
 * @returns Boolean value indicating if the number is a happy number.
 *
 * @description A happy number is a number defined by the following process:
 * if the sum of the squares of its digits eventually equals 1, it is a happy number.
 * so for example, 19 is a happy number because:
 * 1^2 + 9^2 = 1 + 81 = 82
 * 8^2 + 2^2 = 64 + 4 = 68
 * 6^2 + 8^2 = 36 + 64 = 100
 * 1^2 + 0^2 + 0^2 = 1 + 0 + 0 = 1
 *
 *
 * @example
 * ```
 * Input: n = 19
 * Output: true
 * ```
 */
export function isHappyNumber(n: number): boolean {
  const seenNumbers = new Set();
  // if the number has been seen it's in a cycle and not a happy number
  while (!seenNumbers.has(n)) {
    seenNumbers.add(n);
    n = calculateSumOfSquares(n);
    if (n === 1) {
      return true;
    }
  }
  return false;
}
/**
 * Loops through each digit squares and adds them.
 * Returns the sum of the squares of the digits of the number.
 */
function calculateSumOfSquares(number: number) {
  let sum = 0;
  while (number > 0) {
    const digit = number % 10;
    sum += digit * digit;
    number = Math.floor(number / 10);
  }
  return sum;
}
