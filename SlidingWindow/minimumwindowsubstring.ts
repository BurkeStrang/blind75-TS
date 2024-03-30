
// Given two strings s and t of lengths m and n respectively, return the minimum window substring
// of s such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".
//
// The testcases will be generated such that the answer is unique.
//
// Example 1:
//
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:
//
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:
//
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

function minWindow(s: string, t: string): string {
  const map = new Map();
  for (const char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let min = Infinity;
  let minLeft = 0;
  let count = t.length;
  while (right < s.length) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1);
      if (map.get(s[right]) >= 0) {
        count--;
      }
    }
    while (count === 0) {
      if (right - left + 1 < min) {
        min = right - left + 1;
        minLeft = left;
      }
      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1);
        if (map.get(s[left]) > 0) {
          count++;
        }
      }
      left++;
    }
    right++;
  }
  return min === Infinity ? "" : s.substring(minLeft, minLeft + min);
}

export { minWindow };


