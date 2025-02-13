import MinHeap from "../Shared/min_heap";

export function kSmallestNumber(lists: number[][], k: number) {
    const listLength = lists.length;
    const minHeapforKSmallest = new MinHeap<
        [smallest: number, listIndex: number, numIndex: number]
    >();

    for (let index = 0; index < listLength; index++) {
        if (lists[index].length == 0) {
            continue;
        } else minHeapforKSmallest.offer([lists[index][0], index, 0]);
    }

    let numbersChecked = 0,
        smallestNumber = 0,
        listIndex = 0,
        numIndex = 0;

    while (minHeapforKSmallest.size() > 0) {
        const result = minHeapforKSmallest.poll();

        if (result == null) break;

        [smallestNumber, listIndex, numIndex] = result;

        numbersChecked += 1;

        if (numbersChecked == k) break;

        if (numIndex + 1 < lists[listIndex].length) {
            minHeapforKSmallest.offer([
                lists[listIndex][numIndex + 1],
                listIndex,
                numIndex + 1,
            ]);
        }
    }
    return smallestNumber == undefined ? 0 : smallestNumber;
}
