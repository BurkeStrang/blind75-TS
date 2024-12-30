// You are given a string s and an integer k. 
// You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.
//
// Return the length of the longest substring containing the same letter you can get after performing the above operations.
//
// Example 1:
//
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:
//
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

/**
 * Returns the length of the longest substring containing
 * the same letter you can get after performing the above operations.
 *
 * @param s The input string to be processed.
 * @param k The number of skips allowed.
 * @returns The length of the longest substring containing the same letter.
 *
 * @example
 * ```
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 * ```
 */
function characterReplacement(s: string, k: number): number {
  let left = 0;
  let right = 0;
  let max = 0;
  let maxCount = 0;
  const map = new Map();
  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    maxCount = Math.max(maxCount, map.get(s[right]));
    if (right - left + 1 - maxCount > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}

export { characterReplacement };
