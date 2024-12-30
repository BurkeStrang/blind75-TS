/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} s The input string to be processed.
 * @returns {number} The length of the longest substring without repeating characters.
 *
 * @description
 * The function uses a sliding window approach with two pointers (left and right).
 * A map is used to store the last index of each character encountered.
 * The right pointer expands the window by moving to the right, and the left pointer
 * moves to the right of the last occurrence of a repeating character to ensure
 * no characters are repeated within the window.
 *
 * @example
 * ```
 * Input: s = "abcabcbb"
 * Output: 3
 * ```
 */
export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let max = 0;
  const map = new Map();
  while (right < s.length) {
    if (map.has(s[right])) {
      // Move the left pointer to the right of the last occurrence of the character
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right); // Update the map with the current index of the character
    max = Math.max(max, right - left + 1); // Update the maximum length of substring found
    console.log(map);
    console.log(left, "left");
    console.log(right, "right");
    console.log(max, "max");
    // Increment right pointer to expand the window
    right++;
  }
  return max; // Return the maximum length of substring without repeating characters
}
