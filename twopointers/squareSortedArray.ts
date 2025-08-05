// 977. Squares of a Sorted Array
// given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order

// exmaple 1:
// input: nums = [-4, -1, 0, 3, 10]
// output: [0,1,9,16,100]

function sortedSquares(nums: number[]): number[] {
    // need two pointers
    let left = 0;
    let right = nums.length - 1;
    let output: number[] = new Array(nums.length)
    // we start from the end of the array to the begining
    let i = nums.length - 1;

    while (left <= right) {
        let value: number;

        if (nums[left]! * nums[left]! >= nums[right]! * nums[right]!) {
            value = nums[left]! * nums[left]!;
            left++;
        } else {
            value = nums[right]! * nums[right]!;
            right--;
        }
        output[i--] = value;
    }
    return output;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));