import LinkedListNode from "../Shared/linked_list_node";

/**
 * Removes the nth node from the end of the linked list and returns the new head.
 * @param head The head of the linked list.
 * @param n The position from the end of the node to remove.
 * @returns The head of the modified linked list.
 */
function removeNthLastNode(head: LinkedListNode<number> | null, n: number): LinkedListNode<number> | null {
  // Create a dummy node that points to the head
  const dummy = new LinkedListNode<number>(0);
  dummy.next = head;

  let fast: LinkedListNode<number> | null = dummy;
  let slow: LinkedListNode<number> | null = dummy;

  // Move fast pointer n+1 steps ahead to maintain the gap
  for (let i = 0; i <= n; i++) {
    if (fast === null) {
      // If n is larger than the length of the list, return the original head
      return head;
    }
    fast = fast.next;
  }

  // Move both fast and slow pointers until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow!.next; // Non-null assertion since slow starts at dummy
  }

  // Remove the nth node from the end
  if (slow !== null && slow.next !== null) {
    slow.next = slow.next.next;
  }

  // Return the new head of the list
  return dummy.next;
}

export { removeNthLastNode };
