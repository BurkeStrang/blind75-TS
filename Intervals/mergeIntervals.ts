/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 */
export function mergeIntervals(intervals: number[][]) {
  if (intervals.length === 0) {
    return [];
  }

  // Sort the intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];
  let currentInterval = intervals[0];
  result.push(currentInterval);

  for (const interval of intervals) {
    const currentEnd = currentInterval[1];
    const nextBegin = interval[0];
    const nextEnd = interval[1];

    if (currentEnd >= nextBegin) {
      // Overlapping intervals, merge them by updating the end if needed
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      // No overlap, add the new interval to the result
      currentInterval = interval;
      result.push(currentInterval);
    }
  }

  return result;
}
