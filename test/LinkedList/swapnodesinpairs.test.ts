import { swapPairs } from "../../LinkedList/swapnodesinpairs";
import LinkedList from "../../Shared/linked_list";

describe("Is this a palindrome", () => {
    test("Testcase 1", () => {
        const linkedList = new LinkedList<number>();
        const expected = new LinkedList<number>();
        expected.createLinkedList([2, 1, 2, 3, 2, 1]);
        linkedList.createLinkedList([1, 2, 3, 2, 1, 2]);
        expect(swapPairs(linkedList.head!)).toEqual(expected.head);
    });
});
