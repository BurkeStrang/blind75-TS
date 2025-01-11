import MaxHeap from "../Shared/max_heap";
import MinHeap from "../Shared/min_heap";

export class medianFinder {
  maxHeap = new MaxHeap();
  minHeap = new MinHeap();

  addNum(num: number): void {
    if (this.maxHeap.size() == 0 || num < this.maxHeap.peek()!)
      this.maxHeap.push(num);
    else
      this.minHeap.push(num);

    this.balanceHeaps();
  }

  balanceHeaps(): void {
    const biggerHeap = this.maxHeap.size() > this.minHeap.size() ? this.maxHeap : this.minHeap;
    const smallerHeap = this.maxHeap.size() > this.minHeap.size() ? this.minHeap : this.maxHeap;

    if (biggerHeap.size() - smallerHeap.size() > 1) {
      const value = biggerHeap.pop()!;
      smallerHeap.push(value);
    }
  }

  findMedian(): number | null {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    }
    else if (this.maxHeap.size() < this.minHeap.size()) {
      return this.minHeap.peek();
    }
    return (this.maxHeap.peek()! + this.minHeap.peek()!) / 2.0;
  }
}
