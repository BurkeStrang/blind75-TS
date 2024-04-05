// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//
// The overall run time complexity should be O(log (m+n)).
//
//
//
// Example 1:
//
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
//
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let totalLength: number = nums1.length + nums2.length;
  let halfLength: number = Math.floor(totalLength / 2);
  let isEven: boolean = totalLength % 2 === 0;
  let [i, j]: number[] = [0, 0];
  let [left, right]: number[] = [0, 0];
  while (i + j <= halfLength) {
    left = right;
    if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
      right = nums1[i];
      i++;
    } else {
      right = nums2[j];
      j++;
    }
  }
  return isEven ? (left + right) / 2 : right;
}

export { findMedianSortedArrays };
