class NumArray {
    // properties in classes are data it holds
    // this is a private property, only methods inside the class can access prefixSums
    private prefixSums: number[];

    // this is the code that runs when we create an object
    constructor(nums: number[]) {
        // initialize prefixSums array with 0
        this.prefixSums = [0];
        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i+1] = this.prefixSums[i]! + nums[i]!;
            /**
             * example of this part of the code
             * prefixSums[0] = 0
             * i = 0 → prefixSums[1] = 0 + (-2) = -2
             * i = 1 → prefixSums[2] = -2 + 0 = -2
             * i = 2 → prefixSums[3] = -2 + 3 = 1
             * i = 3 → prefixSums[4] = 1 + (-5) = -4
             * i = 4 → prefixSums[5] = -4 + 2 = -2
             * i = 5 → prefixSums[6] = -2 + (-1) = -3
             */
        }
    }

    // this is a public method
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

// this creates an object of the class NumArray that runs the code constructor and then calls the sumRange
console.log(new NumArray([-2,0,3,-5,2,-1]).sumRange(0,2));
// [0, -2, -2, 1, -4, -2, -3] -> (0,2)