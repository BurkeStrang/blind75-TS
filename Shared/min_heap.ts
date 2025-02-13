// Define a type alias for allowed elements.
type HeapElement = number | [number, ...unknown[]];

export default class MinHeap<T extends HeapElement = HeapElement> {
    private data: T[];
    // The comparison function extracts the number and sorts in ascending order.
    private compareVal: (a: number, b: number) => number;

    constructor(data: T[] = []) {
        this.data = data;
        // In a min heap, smaller numbers are higher priority.
        this.compareVal = (a: number, b: number) => a - b;
        this.heapify();
    }

    // Helper method to extract a number from an element.
    private getValue(item: T): number {
        return typeof item === "number" ? item : item[0];
    }

    private heapify(): void {
        if (this.size() < 2) return;
        for (let i = 1; i < this.size(); i++) {
            this.percolateUp(i);
        }
    }

    public peek(): T | null {
        return this.size() === 0 ? null : this.data[0];
    }

    public offer(value: T): void {
        this.data.push(value);
        this.percolateUp(this.size() - 1);
    }

    public poll(): T | null {
        if (this.size() === 0) return null;
        const result = this.data[0];
        const last = this.data.pop()!;
        if (this.size() > 0) {
            this.data[0] = last;
            this.percolateDown(0);
        }
        return result;
    }

    private percolateUp(index: number): void {
        while (index > 0) {
            const parentIndex: number = (index - 1) >> 1;
            if (
                this.compareVal(
                    this.getValue(this.data[index]),
                    this.getValue(this.data[parentIndex])
                ) < 0
            ) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private percolateDown(index: number): void {
        const lastIndex: number = this.size() - 1;
        while (true) {
            const leftIndex: number = index * 2 + 1;
            const rightIndex: number = index * 2 + 2;
            let targetIndex: number = index;

            if (
                leftIndex <= lastIndex &&
                this.compareVal(
                    this.getValue(this.data[leftIndex]),
                    this.getValue(this.data[targetIndex])
                ) < 0
            ) {
                targetIndex = leftIndex;
            }

            if (
                rightIndex <= lastIndex &&
                this.compareVal(
                    this.getValue(this.data[rightIndex]),
                    this.getValue(this.data[targetIndex])
                ) < 0
            ) {
                targetIndex = rightIndex;
            }

            if (targetIndex !== index) {
                this.swap(index, targetIndex);
                index = targetIndex;
            } else {
                break;
            }
        }
    }

    private swap(index1: number, index2: number): void {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    public size(): number {
        return this.data.length;
    }
}
