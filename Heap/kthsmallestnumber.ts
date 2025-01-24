import MinHeap from "../Shared/min_heap";

export function kthSmallestNumber(matrix: number[][], k: number): number {
  const rowCount = matrix.length;
  let numbersChecked = 0;

  const minNumbers = new MinHeap<[number, number, number]>();

  for (let row = 0; row < Math.min(rowCount, k); row++) {
    minNumbers.offer([matrix[row][0], row, 0]);
  }

  while (minNumbers.size() > 0) {
    const current = minNumbers.poll();

    if (!current) continue;
    const [, row, col] = current;

    if (++numbersChecked === k) {
      return matrix[row][col];
    }

    if (col + 1 < matrix[row].length) {
      minNumbers.offer([matrix[row][col + 1], row, col + 1]);
    }
  }
  return -1;
}
