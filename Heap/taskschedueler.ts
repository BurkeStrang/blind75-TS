/**
 * Calculates the least amount of time needed to execute all the tasks.
 *
 * @param tasks represents the tasks that need to be executed.
 * @param n represents the cooldown period between two same tasks.
 * @returns the least amount of time needed to execute all the tasks.
 *
 * @example
 * ```
 * Input: tasks = "AABB", n = 2
 * Ouput: 5  [A, B, idle, A, B]
 *
 * Input: tasks = "AAABBB", n = 2
 * Output: 8 [A, B, idle, A, B, idle, A, B]
 * ```
 */
export function leastTime(tasks: string[], n: number): number {

  // create frequency map
  const frequencies = new Map<string,number>();
  for (const task of tasks)
    frequencies.set(task, (frequencies.get(task) || 0) + 1);

  // essential make min priorityQueue or minHeap
  const sortedFrequencies: [string,number][]= Array.from(frequencies.entries()).sort((a, b) => a[1] - b[1]);
  // get the last value in sorted array
  const lastElement = sortedFrequencies.pop();
  const maxFreq = lastElement ? lastElement[1] : 0;

  // determine idle time between two of the same tasks
  let idleTime = (maxFreq - 1) * n;

  while (sortedFrequencies.length > 0 && idleTime > 0) {
    const element = sortedFrequencies.pop();
    if (element) {
      idleTime -= Math.min(maxFreq - 1, element[1]);
    }
  }

  // make sure idle time is not negative
  idleTime = Math.max(0, idleTime);
  return tasks.length + idleTime;
}

