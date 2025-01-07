import LinkedListNode from '../Shared/linked_list_node';
// import { printLinkedList } from '../Shared/linked_list_node';

/**
 * Reorders the given linked list in-place to follow the specific order:
 * L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 * 
 * @param head The head of the singly linked list to reorder.
 */
export function reorderList(head: LinkedListNode<number>): LinkedListNode<number> {

  if (!head || !head.next)
    return head;

  // Find the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let prev = null;
  let curr = slow.next;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  slow.next = null;

  // Merge the two halves
  let first = head;
  let second = prev;
  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1!;
    second = temp2;
  }

  return head;
}
