// 209. Minimum Size Subarray Sum

function minSubArrayLen(target: number, nums: number[]): number {
    let result = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]!;

        while (sum >= target) {
            result = Math.min(result, right-left + 1);
            left += 1;
            sum-= nums[left - 1]!;
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

console.log(minSubArrayLen(7, [2,3,1,7,4,3]));