// 643. Maximum Average Subarray I typescript

// example
// input = [1,2,3,4,5,6,7,8]
// step 1: define the maxsum to 0
// step 2: left and right pointer of the window
// step 3: add the initial k elements in the input
// step 4: set the first result as teh maxsum
// step 5: move the right pointer and add it to the current sum
// step 6: move the left pointer and subtract it from the current sum
// step 7: compare it to maxsum, if greater then update the maxsum

// windowsum, maxsum

function findMaxAverage(nums: number[], k: number): number {
    let windowSum: number = 0;

    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum: number = windowSum;

    // slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    // obtain the average.
    return maxSum / k;
}

console.log(findMaxAverage([1,2,3,4,5,6,7,8], 4));