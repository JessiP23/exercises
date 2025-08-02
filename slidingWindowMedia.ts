function medianSlidingWindow(nums: number[], k: number): number[] {
    let finalMedianValues: number[] = [];
    let result: number[] = [];
    
    for(let rightSideOfWindow = 0; rightSideOfWindow < nums.length; rightSideOfWindow++) {
        let currentValue = nums[rightSideOfWindow]!;
        finalMedianValues.push(currentValue);

        while (finalMedianValues.length > k) {
            finalMedianValues.shift();
        }

        if (finalMedianValues.length == k) {
            let medianValue = calculateMedianValue(finalMedianValues);
            result.push(medianValue);
        }
    }

    return result;
}

function calculateMedianValue(nums: number[]): number {
    const sortedNums = [...nums].sort((a, b) => a - b);

    if (sortedNums.length % 2 == 1) {
        return sortedNums[Math.floor(sortedNums.length / 2)]!;
    }
    return (sortedNums[sortedNums.length / 2]! + sortedNums[sortedNums.length / 2 - 1]!) / 2;
}

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));