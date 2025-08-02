// 643. Maximum Average Subarray I

function findTheMaxAvg(nums: number[], k: number): number {
    // define windowsum
    let windowSum: number = 0;

    // calculate the sum of the first k integers
    for (let i = 0; i < k; i++) {
        windowSum += nums[i]!;
    }

    // define maxsum
    let maxSum: number = windowSum;

    // move the sliding window
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i-k]! + nums[i]!;
        maxSum = Math.max(windowSum, maxSum);
    }

    return maxSum / k;
}

console.log(findTheMaxAvg([6,5,7], 3));