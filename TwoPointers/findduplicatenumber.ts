/**
 * Finds the duplicate number in an array where each integer is between 1 and n (inclusive),
 * and there is only one duplicate number but it can be repeated more than once.
 * @param nums - An array of integers
 * @returns The duplicate number
 */
export function findDuplicateNumber(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  // Find the intersection point of the two pointers
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Find the "entrance" to the cycle
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
