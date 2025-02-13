/**
 * Detect if a cycle exists in an array of integers
 * @param nums - An array of integers
 * @returns boolean - Has Cycle
 * examples: [3,1,2] => true, [2,1,-1,-2] => false
 */
export function circularArrayLoop(nums: number[]): boolean {
    const size = nums.length;

    // Iterate through each index of the array 'nums'.
    for (let i = 0; i < size; i++) {
        // Set slow and fast pointer at current index value.
        let slow = i;
        let fast = i;
        // Set true in 'forward' if element is positive, set false otherwise.
        const forward = nums[i] > 0;

        while (true) {
            // Move slow pointer to one step.
            slow = nextStep(slow, nums[slow], size);
            // If cycle is not possible, break the loop and start from next element.
            if (isNotCycle(nums, forward, slow)) {
                break;
            }

            // First move of fast pointer.
            fast = nextStep(fast, nums[fast], size);
            // If cycle is not possible, break the loop and start from next element.
            if (isNotCycle(nums, forward, fast)) {
                break;
            }

            // Second move of fast pointer.
            fast = nextStep(fast, nums[fast], size);
            // If cycle is not possible, break the loop and start from next element.
            if (isNotCycle(nums, forward, fast)) {
                break;
            }

            // At any point, if fast and slow pointers meet each other,
            // it indicates that loop has been found, return true.
            if (slow === fast) {
                return true;
            }
        }
    }
    return false;
}
function nextStep(pointer: number, value: number, size: number): number {
    let result = (pointer + value) % size;
    if (result < 0) {
        result += size;
    }
    return result;
}
function isNotCycle(nums: number[], prevDirection: boolean, pointer: number) {
    // Set current direction to true if current element is positive, set false otherwise.
    const currDirection = nums[pointer] >= 0;
    // If current direction and previous direction are different or moving a pointer takes back to the same value,
    // then the cycle is not possible, we return true, otherwise return false.
    if (prevDirection !== currDirection || Math.abs(nums[pointer] % nums.length) === 0) {
        return true;
    } else {
        return false;
    }
}
