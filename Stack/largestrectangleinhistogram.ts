// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
// return the area of the largest rectangle in the histogram.
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

function largestRectangleArea(heights: number[]): number {
  let largestArea = 0;
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    let start = i;

    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      let [lastI, lastH] = (stack ?? []).pop() ?? [];
      largestArea = Math.max(largestArea, lastH * (i - lastI));
      start = lastI;
    }
    stack.push([start, heights[i]]);
  }

  for (let j = 0; j < stack.length; j++) {
    let currArea = stack[j][1] * (heights.length - stack[j][0]);
    largestArea = Math.max(largestArea, currArea);
  }

  return largestArea;
}

export { largestRectangleArea };
