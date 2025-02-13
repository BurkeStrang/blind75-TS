import LinkedList from "../../Shared/linked_list";
import LinkedListNode from "../../Shared/linked_list_node";
import { removeNthLastNode } from "../../LinkedList/removenthlastnode";

describe("removeNthLastNode", () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => {
        linkedList = new LinkedList<number>();
    });

    /**
     * Helper function to create a linked list from an array.
     * @param elements Array of numbers to create the linked list.
     */
    const createList = (elements: number[]): LinkedListNode<number> | null => {
        linkedList.createLinkedList(elements);
        return linkedList.head;
    };

    /**
     * Helper function to convert linked list to array for easy comparison.
     * @param head Head node of the linked list.
     * @returns Array of numbers representing the linked list.
     */
    const toArray = (head: LinkedListNode<number> | null): number[] => {
        const result: number[] = [];
        let current = head;
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    };

    test("removes the 2nd node from the end in a list of 5 nodes", () => {
        const elements = [1, 2, 3, 4, 5];
        const head = createList(elements);
        const updatedHead = removeNthLastNode(head, 2);
        const result = toArray(updatedHead);
        expect(result).toEqual([1, 2, 3, 5]);
    });

    test("removes the head node when n equals the length of the list", () => {
        const elements = [10, 20, 30, 40];
        const head = createList(elements);
        const updatedHead = removeNthLastNode(head, 4);
        const result = toArray(updatedHead);
        expect(result).toEqual([20, 30, 40]);
    });

    test("removes the last node when n is 1", () => {
        const elements = [5, 15, 25];
        const head = createList(elements);
        const updatedHead = removeNthLastNode(head, 1);
        const result = toArray(updatedHead);
        expect(result).toEqual([5, 15]);
    });

    test("returns the same list when n is greater than the length of the list", () => {
        const elements = [7, 14, 21];
        const head = createList(elements);
        const updatedHead = removeNthLastNode(head, 5);
        const result = toArray(updatedHead);
        expect(result).toEqual([7, 14, 21]);
    });

    test("returns null when the list is empty", () => {
        const head = createList([]);
        const updatedHead = removeNthLastNode(head, 1);
        expect(updatedHead).toBeNull();
    });

    test("removes the only node in a single-element list", () => {
        const elements = [100];
        const head = createList(elements);
        const updatedHead = removeNthLastNode(head, 1);
        expect(updatedHead).toBeNull();
    });

    test("handles n being zero by returning the original list", () => {
        const elements = [1, 2, 3];
        const head = createList(elements);
        const updatedHead = removeNthLastNode(head, 0);
        const result = toArray(updatedHead);
        expect(result).toEqual([1, 2, 3]);
    });

    test("handles n being negative by returning the original list", () => {
        const elements = [4, 5, 6];
        const head = createList(elements);
        const updatedHead = removeNthLastNode(head, -1);
        const result = toArray(updatedHead);
        expect(result).toEqual([4, 5, 6]);
    });
});
