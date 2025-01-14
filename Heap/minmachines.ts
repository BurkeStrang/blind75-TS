import MinHeap from '../Shared/min_heap';

/**
 * Calculate the minimum number of machines needed to process all tasks.
 *
 * @param tasksList. the taskList to be processed.
 * @returns Number of machines needed to process all tasks.
 *
 * @example
 * ```
 * Input: [[1, 4], [2, 3], [3, 6]]
 * Output: 2
 * ```
 */
export function minMachines(tasksList: number[][]): number {
  // First, sort the tasks by their start time.
  tasksList.sort((a, b) => a[0] - b[0]);
  let optimalMachines = 0;
  // Create a min-heap for tracking available machines by their end times.
  const machinesAvailable = new MinHeap<number>();

  for (const task of tasksList) {
    const taskStart = task[0];
    const taskEnd = task[1];

    // Check if a machine is available (the one with the earliest finishing time)
    if (machinesAvailable.size() > 0 && machinesAvailable.peek()! <= taskStart) {
      // Machine becomes free and can be reused.
      machinesAvailable.poll();
    } else {
      // No available machine, need to allocate a new one.
      optimalMachines++;
    }
    // Add (or re-add) this machine with the new end time.
    machinesAvailable.offer(taskEnd);
  }

  return optimalMachines;
}
