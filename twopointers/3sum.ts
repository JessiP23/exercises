// 15. 3sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j!= k, and nums[i] + nums[j] + nums[k] == 0.

// Notice tha tthe solution set must not contain duplicate triplets
// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1,-1,2], [-1,0,1]]

function threeSum(nums: number[]) : number[][] {
    // sort numbers 
    nums.sort((a,b) => a -b);

    // array to store the results
    const result: number[][] = [];

    for (let i=0; i < nums.length - 2; i++) {
        // skip duplicates
        if (i > 0 && nums[i] === nums[i-1]) continue;

        // so the left starts right after the current number
        let left = i + 1;
        // the right is the end of the array
        let right = nums.length - 1;

        // should be something like this
        // n=[1,2,3,4,5] -> i =n[0] = 1 -> left =n[0+1 = 1] = 2 -> right =n[4] = 5 

        // left and right cant be the same so tha tis why of this condition
        while (left < right) {
            // sum all numbers
            const sum = nums[i]! + nums[left]! + nums[right]!;

            // this is what we want
            if (sum === 0) {
                // add the triplets to our result array
                result.push([nums[i]!, nums[left]!, nums[right]!]);
                // if we have the same number added then just move forward for non repeat
                while (left < right && nums[left] === nums[left+1]) left++;
                while (left < right && nums[right] === nums[right-1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                // move the left so that means the right is greater and this is why we are havign a negative value.
                left++;
            } else {
                // if the value ends up been positive i think is better to go back from the end
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 1, -2, -4]));