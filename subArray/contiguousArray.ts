// 525. Contiguous Array
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1
function findMaxLength(nums: number[]) : number {
   // this requires a prefix sum + hash map
   const map = new Map();
   map.set(0, -1);
   let curr = 0, ans = 0;
   const matchMap = new Map();

   for (let i = 0; i < nums.length; i++) {
    curr += nums[i] === 1 ? 1 : -1;

    if (map.has(curr)) {
        ans = Math.max(ans, i - map.get(curr));
    } else {
        map.set(curr, i);
    }
   }
   return ans;
}

console.log(findMaxLength([0,1,1,1,0,1,0,0,1]));