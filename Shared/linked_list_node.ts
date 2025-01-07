export default class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null;

  constructor(data: T, next: LinkedListNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export function printLinkedList(listInfo: (LinkedListNode<number> | null)[], name: string[]): void {
  const result: string[] = [];
  for (let i = 0; i < listInfo.length; i++) {
    result.push(`${name[i]} - [`);
    let current: LinkedListNode<number> | null = listInfo[i];
    while (current) {
      result.push(current.data.toString());
      if (current.next) {
        result.push(',');
      }
      current = current.next;
    }
    result.push(', null]');
  }
  console.log(result.join(' '));
}

