import MaxHeap from "../Shared/max_heap";
import MinHeap from "../Shared/min_heap";

export class medianFinder {
    maxHeap = new MaxHeap<number>();
    minHeap = new MinHeap<number>();

    addNum(num: number): void {
        if (this.maxHeap.size() == 0 || num < this.maxHeap.peek()!) this.maxHeap.offer(num);
        else this.minHeap.offer(num);

        this.balanceHeaps();
    }

    balanceHeaps(): void {
        const biggerHeap = this.maxHeap.size() > this.minHeap.size() ? this.maxHeap : this.minHeap;
        const smallerHeap = this.maxHeap.size() > this.minHeap.size() ? this.minHeap : this.maxHeap;

        if (biggerHeap.size() - smallerHeap.size() > 1) {
            const value = biggerHeap.poll()!;
            smallerHeap.offer(value);
        }
    }

    findMedian(): number | null {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek()!;
        } else if (this.maxHeap.size() < this.minHeap.size()) {
            return this.minHeap.peek()!;
        }
        return (this.maxHeap.peek()! + this.minHeap.peek()!) / 2.0;
    }
}
