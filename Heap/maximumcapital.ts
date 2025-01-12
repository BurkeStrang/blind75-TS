import MaxHeap from "../Shared/max_heap";
import MinHeap from "../Shared/min_heap";

/**
 * Find the maximum capital earned
 *
 * @param c - Start-up capital
 * @param k - Number of projects
 * @param capitals - Array of capitals
 * @param profits - Array of profits
 * @returns - the maximum capital earned
 *
 * @example
 * ```
 * 1.
 * capitals: [ 1, 1, 2 ]
 * profits: [ 1, 2, 3 ]
 * Number of projects k: 1
 * Start-up capital c: 0
 * Maximum capital earned: 0
 *
 * 2.
 * capitals: [ 1, 2, 2, 3 ]
 * profits: [ 2, 4, 6, 8 ]
 * Number of projects k: 2
 * Start-up capital c: 1
 * Maximum capital earned: 11
 * ```
 */
export function maximumCapital(c: number, k: number, capitals: number[], profits: number[]): number {
  let currentCapital = c;
  const capitalsMinHeap = new MinHeap<number[]>();
  const profitsMaxHeap = new MaxHeap<number[]>();

  for (let x = 0; x < capitals.length; x++) {
    capitalsMinHeap.push([capitals[x], x]);
  }

  for (let counter = 0; counter < k; counter++) {
    while (
      capitalsMinHeap.size() > 0 &&
      capitalsMinHeap.peek()![0] <= currentCapital
    ) {
      const element: number[] = capitalsMinHeap.pop()!;
      c = element[0];
      const i = element[1];
      profitsMaxHeap.push([profits[i]]);
    }

    if (profitsMaxHeap.size() == 0) {
      break
    }

    const element = profitsMaxHeap.pop();
    const j = element![0];
    currentCapital = currentCapital + j;
  }

  return currentCapital;
}
