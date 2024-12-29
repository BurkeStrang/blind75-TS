import LinkedListNode from "../Shared/linked_list_node";
import { reverseLinkedList } from "./reverse";

// could also go in two pointers
export function palindrome(head: LinkedListNode<number>): boolean {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }
  let revertData = reverseLinkedList(slow!);
  while (revertData) {
    if (revertData.data !== head.data)
      return false
    revertData = revertData.next!;
    head = head.next!;
  }
  return true;
}
