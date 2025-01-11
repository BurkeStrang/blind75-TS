// Generic MinHeap class with default type of number.
// If no key function is provided, it assumes that T is a number and uses the identity function.
class MinHeap<T = number> {
  private data: T[];
  private keyFn: (item: T) => number;

  /**
   * You can call the constructor in two ways:
   *  1. With no arguments: constructs an empty heap of numbers.
   *  2. With an array and a key function: constructs a heap of type T.
   *
   * @param data - (Optional) An initial array of items.
   * @param keyFn - (Optional) A function that maps an item to a number for comparison.
   */
  constructor(data?: T[], keyFn?: (item: T) => number) {
    // If no key function is provided, assume items are numbers.
    if (keyFn) {
      this.keyFn = keyFn;
    } else {
      // Type assertion: if T is not number and no key function is provided,
      // errors may occur at runtime.
      this.keyFn = ((item: T) => item) as (item: T) => number;
    }

    this.data = data ? [...data] : [];
    this.heapify();
  }

  /**
   * Re-arrange the array into a valid min-heap.
   */
  private heapify(): void {
    if (this.size() < 2) return;
    // Start at index 1 and push the element up if necessary.
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i);
    }
  }

  /**
   * Returns the item with the smallest key in the heap without removing it.
   */
  public peek(): T | null {
    return this.size() === 0 ? null : this.data[0];
  }

  /**
   * Inserts a new item into the heap.
   * @param value - The value to be inserted.
   */
  public push(value: T): void {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  /**
   * Removes and returns the smallest item in the heap.
   */
  public pop(): T | null {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop()!;
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  /**
   * Returns the number of elements in the heap.
   */
  public size(): number {
    return this.data.length;
  }

  /**
   * Moves the element at the given index up until the heap property is restored.
   * @param index - The index of the element to percolate up.
   */
  private percolateUp(index: number): void {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.keyFn(this.data[index]) < this.keyFn(this.data[parentIndex])) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  /**
   * Moves the element at the given index down until the heap property is restored.
   * @param index - The index of the element to percolate down.
   */
  private percolateDown(index: number): void {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let smallest = index;

      if (
        leftIndex <= lastIndex &&
        this.keyFn(this.data[leftIndex]) < this.keyFn(this.data[smallest])
      ) {
        smallest = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.keyFn(this.data[rightIndex]) < this.keyFn(this.data[smallest])
      ) {
        smallest = rightIndex;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  /**
   * Swaps two elements in the heap.
   * @param i - Index of the first element.
   * @param j - Index of the second element.
   */
  private swap(i: number, j: number): void {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

export default MinHeap;
