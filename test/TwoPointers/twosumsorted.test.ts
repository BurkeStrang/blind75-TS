import { twoSum } from '../../TwoPointers/twosumsorted';

describe('TwoSumSorted', () => {
  test('Example 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
  });

  test('Example 2', () => {
    expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3])
  });
});
