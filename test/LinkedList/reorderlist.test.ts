import { reorderList } from '../../LinkedList/reorderlist';
import LinkedList from '../../Shared/linked_list';

describe('reorderList', () => {
  test('Testcase 1', () => {
    const linkedList = new LinkedList<number>();
    linkedList.createLinkedList([1, 2, 3, 2, 1]);
    const expected = new LinkedList<number>();
    expected.createLinkedList([1, 1, 2, 2, 3]);
    expect(reorderList(linkedList.head!)).toEqual(expected.head);
  })
  test('Testcase 2', () => {
    const linkedList = new LinkedList<number>();
    linkedList.createLinkedList([1, 2, 3, 4, 5]);
    const expected = new LinkedList<number>();
    expected.createLinkedList([1, 5, 2, 4, 3]);
    expect(reorderList(linkedList.head!)).toEqual(expected.head);
  })
  test('Testcase 3', () => {
    const linkedList = new LinkedList<number>();
    linkedList.createLinkedList([1, 2]);
    const expected = new LinkedList<number>();
    expected.createLinkedList([1, 2]);
    expect(reorderList(linkedList.head!)).toEqual(expected.head);
  })
});

