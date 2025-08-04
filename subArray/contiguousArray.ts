// 525. Contiguous Array
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1
function findMaxLength(nums: number[]) : number {
   // this requires a prefix sum + hash map
   const map = new Map<number, number>();
   map.set(0, -1);
   let maxLength = 0;
   let count = 0;

   for (let i = 0; i < nums.length; i++) {
    // convert 0 to -1
    count += nums[i] === 1 ? 1 : -1;
    if (map.has(count)) {
        maxLength = Math.max(maxLength, i - map.get(count)!);
    } else {
        map.set(count, i);
    }
   }
   return maxLength;
}

console.log(findMaxLength([0,1,1,1,0,1,0,0,1]));