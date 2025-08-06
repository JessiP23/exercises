// 15. 3sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j!= k, and nums[i] + nums[j] + nums[k] == 0.

// Notice tha tthe solution set must not contain duplicate triplets
// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1,-1,2], [-1,0,1]]

function threeSum(nums: number[]) : number[][] {
    const result: number[][] = [];
    nums.sort((a,b) => a -b);

    for (let i =0; i < nums.length - 1; i++) {
        // skip duplicates elements
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i]! + nums[left]! + nums[right]!;

            if (sum === 0) {
                result.push([nums[i]!, nums[left]!, nums[right]!]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                // skip right duplicates elements
                while (left < right && nums[right] === nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 1, -2, -4]));