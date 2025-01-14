import { kSmallestPairs } from '../../Heap/ksmallestspairs';

describe('Task Schedueler', () => {
  test('Testcase 1', () => {
    const list1 = [1, 7, 11];
    const list2 = [2, 4, 6];
    const k = 3;
    const expected = [[1, 2], [1, 4], [1, 6]];
    expect(kSmallestPairs(list1, list2, k)).toEqual(expected);
  })
  test('Testcase 2', () => {
    const list1 = [1, 1, 2];
    const list2 = [1, 2, 3];
    const k = 2;
    const expected = [[1, 1], [1, 1]];
    expect(kSmallestPairs(list1, list2, k)).toEqual(expected);
  })
  test('Testcase 3', () => {
    const list1 = [2, 8, 9];
    const list2 = [1, 3, 6];
    const k = 9;
    const expected = [[2, 1], [2, 3], [2, 6], [8, 1], [9, 1], [8, 3], [9, 3], [8, 6], [9, 6]];
    expect(kSmallestPairs(list1, list2, k)).toEqual(expected);
  })
});

