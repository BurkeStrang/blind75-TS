// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
//
// In other words, return true if one of s1's permutations is the substring of s2.
//
// Example 1:
//
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:
//
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

function checkInclusion(s1: string, s2: string): boolean {
  const map = new Map();
  for (let char of s1) {
    map.set(char, map.get(char) + 1 || 1);
  }
  let start = 0;
  let end = 0;
  let counter = map.size;
  while (end < s2.length) {
    const endChar = s2[end];
    if (map.has(endChar)) {
      map.set(endChar, map.get(endChar) - 1);
      if (map.get(endChar) === 0) {
        counter--;
      }
    }
    end++;
    while (counter === 0) {
      const startChar = s2[start];
      if (map.has(startChar)) {
        map.set(startChar, map.get(startChar) + 1);
        if (map.get(startChar) > 0) {
          counter++;
        }
      }
      if (end - start === s1.length) {
        return true;
      }
      start++;
    }
  }
  return false;
}

export { checkInclusion };
