import { palindrome } from "../../LinkedList/palindrome";
import LinkedList from "../../Shared/linked_list";

describe("Is this a palindrome", () => {
    test("Testcase 1", () => {
        const linkedList = new LinkedList<number>();
        linkedList.createLinkedList([1, 2, 3, 2, 1]);
        expect(palindrome(linkedList.head!)).toBe(true);
    });
});
