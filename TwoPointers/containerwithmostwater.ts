/**
 * Find the max area of water that can be trapped between two lines
 * @param height - An array of integers
 * @returns number - max area of water
 * example: [1,8,6,2,5,4,8,3,7] => 49
 */
function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let max = 0;

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);

    max = Math.max(max, area);

    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return max;
}

export { maxArea };
