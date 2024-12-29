import { findDuplicateNumber } from '../../TwoPointers/findduplicatenumber';

describe('findDuplicateNumber', () => {
  test('should find the duplicate number in the array', () => {
    const nums = [1, 3, 4, 2, 2];
    expect(findDuplicateNumber(nums)).toBe(2);
  });

  test('should find the duplicate number in the array with multiple duplicates', () => {
    const nums = [3, 1, 3, 4, 2];
    expect(findDuplicateNumber(nums)).toBe(3);
  });

  test('should find the duplicate number in the array with the duplicate at the end', () => {
    const nums = [1, 4, 4, 2, 3];
    expect(findDuplicateNumber(nums)).toBe(4);
  });

  test('should find the duplicate number in the array with the duplicate at the beginning', () => {
    const nums = [2, 2, 3, 4, 1];
    expect(findDuplicateNumber(nums)).toBe(2);
  });
});
