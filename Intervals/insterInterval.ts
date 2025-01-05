export function insertInterval(existingIntervals: number[][], newInterval: number[]) {
  const resList: number[][] = [];
  let i = 0;
  const n = existingIntervals.length;

  // Add all existingIntervals before the new interval
  while (i < n && existingIntervals[i][1] < newInterval[0]) {
    resList.push(existingIntervals[i]);
    i++;
  }

  // Merge all overlapping existingIntervals with the new interval
  while (i < n && existingIntervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], existingIntervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], existingIntervals[i][1]);
    i++;
  }
  resList.push(newInterval);

  // Add all existingIntervals after the new interval
  while (i < n) {
    resList.push(existingIntervals[i]);
    i++;
  }
  return resList;
}
