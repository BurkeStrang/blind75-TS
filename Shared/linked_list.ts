import LinkedListNode from "./linked_list_node";

class LinkedList<T> {
    head: LinkedListNode<T> | null;

    constructor() {
        this.head = null;
    }

    /**
     * Inserts a node at the head of the linked list.
     * @param node The node to be inserted.
     */
    insertNodeAtHead(node: LinkedListNode<T>): void {
        node.next = this.head;
        this.head = node;
    }

    /**
     * Creates a linked list from an array of elements.
     * @param list An array of elements to be added to the linked list.
     */
    createLinkedList(list: T[]): void {
        // It's not necessary to reverse the list if inserting at head,
        // but keeping it as per the original implementation.
        list.slice().reverse().forEach((element) => {
            const newNode = new LinkedListNode<T>(element);
            this.insertNodeAtHead(newNode);
        });
    }

    /**
     * Displays the elements of the linked list as a string.
     * @returns A string representation of the linked list.
     */
    display(): string {
        let result = "";
        let temp: LinkedListNode<T> | null = this.head;
        while (temp !== null) {
            result += temp.data;
            temp = temp.next;
            if (temp !== null) {
                result += ", ";
            }
        }
        return result;
    }
}

export default LinkedList;
