import LinkedListNode from "../Shared/linked_list_node";

export function reverseBetween(
    head: LinkedListNode<number> | null,
    left: number,
    right: number
): LinkedListNode<number> | null {
    // If the list is empty or left position is the same as right, return the original list
    if (!head || left === right) {
        return head;
    }

    // Create a dummy node to handle edge case when left = 1
    const dummy = new LinkedListNode<number>(0, head);
    let prev = dummy;

    // Move prev to the node just before the left position
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next!;
    }

    // Current node is the node at left position
    const curr = prev.next;

    // Reverse the portion of the linked list between left and right positions
    for (let i = 0; i < right - left; i++) {
        const nextNode = curr!.next;
        curr!.next = nextNode!.next;
        nextNode!.next = prev.next;
        prev.next = nextNode;
    }

    // Return the updated head of the linked list
    return dummy.next;
}
