// 167. Two Sum II - Input Array Is Sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they addd up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// goal: 
// right pointer if  > target, right --
// if right < target, index[2] - target = index[1]
// index[1] -> nums, nums[left] = index[1]

function twoSum(numbers: number[], target: number): number[] {
    // i need two pointers, right and left:
    // so the goal is this, i need index[1] + index[2] = target
    // so i think would be easier to work with index[1] = target - index[2]
    let left = 0;
    // last element
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left]! + numbers[right]!;

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];

};

console.log(twoSum([2,7,11,15], 9));