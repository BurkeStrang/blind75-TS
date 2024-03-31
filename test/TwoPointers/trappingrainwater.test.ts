import { trap } from '../../TwoPointers/trappingrainwater';

describe('Trapping Rain Water', () => {
  test('Example 1', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toStrictEqual(6)
  })
});
