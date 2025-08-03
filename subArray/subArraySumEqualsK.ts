// given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// example 1:
// input: nums=[1,1,1], k=2
// output: 2

// example 2:
// input: number = [1,2,3], k=3
// output: 2

// map object: collectin of key value pairs
// the expression new Map([[0,1]]) creates a new map with a single entry
// the [[0,1]] is an array of arrays, where the inner array represents a key-value pair to be added to the map during initialization
// to access to it we just use map.get(0) = 1

// something new to learn, prefix sum technique
function subarraySum(nums: number[], k: number): number {
    let map = new Map<number, number>([[0,1]]);
    let sumk = 0;

    // itrate over the array
    for (let j = 0; j < nums.length; j++) {
        // add values from one number to the other
        nums[j] = ((j==0) ? nums[j] : nums[j-1]! + nums[j]!)!;
        // now update the sumk basedo n the number
        sumk+= map.get(nums[j]! - k) ?? 0;
        map.set(nums[j]!, (map.get(nums[j]!) ?? 0) + 1);
    }
    return sumk;
}


console.log(subarraySum([1,1,1], 3));