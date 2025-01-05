export default class LinkedListNode<T> {
  data: T | null;
  next: LinkedListNode<T> | null;

  constructor(data: T, next: LinkedListNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}
