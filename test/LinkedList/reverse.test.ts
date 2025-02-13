import { reverseLinkedList } from "../../LinkedList/reverse";
import LinkedList from "../../Shared/linked_list";

describe("Is this a palindrome", () => {
    test("Testcase 1", () => {
        const linkedList = new LinkedList<number>();
        linkedList.createLinkedList([1, 2, 3, 2, 1]);
        const expected = new LinkedList<number>();
        expected.createLinkedList([1, 2, 3, 2, 1]);
        expect(reverseLinkedList(linkedList.head!)).toEqual(expected.head);
    });
    test("Testcase 2", () => {
        const linkedList = new LinkedList<number>();
        linkedList.createLinkedList([1, 2, 3, 4, 5]);
        const expected = new LinkedList<number>();
        expected.createLinkedList([5, 4, 3, 2, 1]);
        expect(reverseLinkedList(linkedList.head!)).toEqual(expected.head);
    });
    test("Testcase 3", () => {
        const linkedList = new LinkedList<number>();
        linkedList.createLinkedList([1, 2]);
        const expected = new LinkedList<number>();
        expected.createLinkedList([2, 1]);
        expect(reverseLinkedList(linkedList.head!)).toEqual(expected.head);
    });
});
