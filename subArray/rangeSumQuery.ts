class NumArray {
    private prefixSums: number[];

    constructor(nums: number[]) {
        // initialize prefixSums array with a size of nums.length + 1 and all elemeents set to 0
        this.prefixSums = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i+1] = this.prefixSums[i]! + nums[i]!;
        }
    }

    sumRange(left: number, right: number): number {
        // the sum of elements from 'left' to 'right' is the sum up to 'right' minus the sum up to 'left - 1'. In the prefix sum array, prefixSums[k] stores the sum of elements from index 0 to k-1 in the original array.
        return this.prefixSums[right + 1]! - this.prefixSums[left]!;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

console.log(new NumArray([-2,0,3,-5,2,-1]).sumRange(0,2));