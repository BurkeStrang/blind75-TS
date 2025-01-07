import LinkedListNode from '../Shared/linked_list_node';
// import { printLinkedList } from '../Shared/linked_list_node';

export function reverseLinkedList(slowPtr: LinkedListNode<number>): LinkedListNode<number> {

  let prev = null, next = null, curr = slowPtr;

  while (curr) {
    // go to next node
    next = curr.next;
    // printLinkedList([prev,curr,next,slowPtr], ['prev', 'curr', 'next','slowPtr']);
    // set the next node to the previous node
    curr.next = prev;
    // printLinkedList([prev,curr,next,slowPtr], ['prev', 'curr', 'next','slowPtr']);
    // set the previous node to the current node
    prev = curr!;
    // printLinkedList([prev,curr,next,slowPtr], ['prev', 'curr', 'next','slowPtr']);
    // iterate to the next node
    curr = next!;
    // printLinkedList([prev,curr,next,slowPtr], ['prev', 'curr', 'next','slowPtr']);
  }

  return prev!;
}
// prev - [ , null] curr - [ 1 , 2 , null] next - [ 2 , null] slowPtr - [ 1 , 2 , null]
//
// prev - [ , null] curr - [ 1 , null] next - [ 2 , null] slowPtr - [ 1 , null]
//
// prev - [ 1 , null] curr - [ 1 , null] next - [ 2 , null] slowPtr - [ 1 , null]
//
// prev - [ 1 , null] curr - [ 2 , null] next - [ 2 , null] slowPtr - [ 1 , null]
// new loop
//
// prev - [ 1 , null] curr - [ 2 , null] next - [ , null] slowPtr - [ 1 , null]
//
// prev - [ 1 , null] curr - [ 2 , 1 , null] next - [ , null] slowPtr - [ 1 , null]
//
// prev - [ 2 , 1 , null] curr - [ 2 , 1 , null] next - [ , null] slowPtr - [ 1 , null]
//
// prev - [ 2 , 1 , null] curr - [ , null] next - [ , null] slowPtr - [ 1 , null]
