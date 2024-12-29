/**
 * Sorts an array containing 0s, 1s, and 2s in place.
 * @param colors - Array of numbers (0, 1, 2).
 * @returns The sorted array.
 * @example
 * sortColors([2,0,2,1,1,0]) => [0,0,1,1,2,2]
 */
function sortColors(colors: number[]): number[] {
  let start = 0;
  let i = 0;
  let end = colors.length - 1;

  while (i <= end) {
    if (colors[i] === 0) {
      // Swap colors[i] with colors[start]
      [colors[i], colors[start]] = [colors[start], colors[i]];
      start++;
      i++;
    } else if (colors[i] === 1) {
      i++;
    } else if (colors[i] === 2) {
      // Swap colors[i] with colors[end]
      [colors[i], colors[end]] = [colors[end], colors[i]];
      end--;
      // Do not increment i here
    }
  }

  return colors;
}

export { sortColors };
