import MinHeap from "../Shared/min_heap";

/**
 * Returns the k smallest pairs in number array of array.
 *
 * @param name list1 the first list.
 * @param name list2 the second list.
 * @returns returns the k smallest pairs in number array of array.
 * @example
 * ```
 * Input: list1 = [1,7,11], list2 = [2,4,6], k = 3
 * Ouput: [[1,2],[1,4],[1,6]]
 * ```
 */
export function kSmallestPairs(
    list1: number[],
    list2: number[],
    k: number
): number[][] {
    const listLength = list1.length;
    const minHeapForPairs = new MinHeap<[number, number, number]>();
    const pairs = [];

    for (let i = 0; i < Math.min(k, listLength); i++) {
        minHeapForPairs.offer([list1[i] + list2[0], i, 0]);
    }
    console.log(minHeapForPairs);

    let counter = 1;

    while (minHeapForPairs.size() > 0 && counter <= k) {
        const [, i, j] = minHeapForPairs.poll()!;
        pairs.push([list1[i], list2[j]]);
        const nextElement = j + 1;

        if (list2.length > nextElement) {
            minHeapForPairs.offer([
                list1[i] + list2[nextElement],
                i,
                nextElement,
            ]);
        }
        counter++;
    }
    return pairs;
}
