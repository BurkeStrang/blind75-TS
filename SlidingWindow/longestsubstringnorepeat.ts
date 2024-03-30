function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let max = 0;
  const map = new Map();
  while (right < s.length) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}

export { lengthOfLongestSubstring };
