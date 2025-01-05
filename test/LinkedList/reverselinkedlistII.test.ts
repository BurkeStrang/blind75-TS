import { reverseBetween } from '../../LinkedList/reverselinkedlistII';
import LinkedList from '../../Shared/linked_list';

describe('Is this a palindrome', () => {
  test('Testcase 1', () => {
    const linkedList = new LinkedList<number>();
    const expected = new LinkedList<number>();
    expected.createLinkedList([2, 1, 2, 3]);
    linkedList.createLinkedList([1, 2, 2, 3]);
    expect(reverseBetween(linkedList.head!, 1, 2)).toEqual(expected.head);
  })
});

