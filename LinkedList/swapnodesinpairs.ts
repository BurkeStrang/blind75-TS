import LinkedListNode from "../Shared/linked_list_node";

export function swapPairs(head: LinkedListNode<number>) {
    const dummy = new LinkedListNode<number>(0, head);
    let prev = dummy;
    let curr = head;

    while (curr && curr.next) {
        // setup first and second nodes
        const first = curr;
        const second = curr.next;

        // swap the nodes
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // increment pointers
        prev = first;
        curr = first.next!;
    }

    return dummy.next;
}
