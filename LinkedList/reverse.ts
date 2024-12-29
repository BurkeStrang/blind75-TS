import LinkedListNode from '../Shared/linked_list_node';

export function reverseLinkedList(slowPtr: LinkedListNode<number>): LinkedListNode<number> {

  let prev = null, next = null, curr = slowPtr;

  while (curr !== null) {
    // go to next node
    next = curr.next;
    // set the next node to the previous node
    curr.next = prev;
    // set the previous node to the current node
    prev = curr!;
    // iterate to the next node
    curr = next!;
  }

  return prev!;
}
