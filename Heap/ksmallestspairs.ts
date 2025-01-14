import MinHeap from "../Shared/min_heap";

export function kSmallestPairs(list1: number[], list2: number[], k: number) : number[][] {
  const listLength = list1.length;
  const minHeapForPairs = new MinHeap<[number, number, number]>();
  const pairs = [];

  for (let i = 0; i < Math.min(k, listLength); i++) {
    minHeapForPairs.offer([list1[i] + list2[0], i, 0]);
  }

  let counter = 1;

  while (minHeapForPairs.size() > 0 && counter <= k) {
    const [, i, j] = minHeapForPairs.poll()!;
    pairs.push([list1[i], list2[j]]);
    const nextElement = j + 1;

    if (list2.length > nextElement) {
      minHeapForPairs.offer([list1[i] + list2[nextElement], i, nextElement]);
    }
    counter++;
  }
  return pairs;
}
