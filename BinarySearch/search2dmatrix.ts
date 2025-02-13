// You are given an m x n integer matrix matrix with the following two properties:
//
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
//
// You must write a solution in O(log(m * n)) time complexity.
//
//
//
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

function searchMatrix(matrix: number[][], target: number): boolean {
    let m: number = matrix.length;
    let n: number = matrix[0].length;
    let left: number = 0;
    let right: number = m * n - 1;
    while (left <= right) {
        let mid: number = Math.floor((left + right) / 2);
        let midElement: number = matrix[Math.floor(mid / n)][mid % n];
        if (midElement === target) return true;
        if (midElement < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

export { searchMatrix };
