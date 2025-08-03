// Simple and efficient solution using sorted array
// Time Complexity: O(n * k * log k) but much simpler to implement
// Space Complexity: O(k)

function medianSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const window: number[] = [];
    
    // Add first k elements
    for (let i = 0; i < k; i++) {
        window.push(nums[i]!);
    }
    
    // Sort the initial window
    window.sort((a, b) => a - b);
    
    // Calculate first median
    result.push(getMedian(window));
    
    // Slide the window
    for (let i = k; i < nums.length; i++) {
        // Remove the element going out of window
        const removeIndex = window.indexOf(nums[i - k]!);
        window.splice(removeIndex, 1);
        
        // Add the new element in sorted position
        insertSorted(window, nums[i]!);
        
        // Calculate median for current window
        result.push(getMedian(window));
    }
    
    return result;
}

function getMedian(arr: number[]): number {
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 1) {
        return arr[mid]!;
    }
    return (arr[mid]! + arr[mid - 1]!) / 2;
}

function insertSorted(arr: number[], num: number): void {
    // Find the correct position to insert
    let i = 0;
    while (i < arr.length && arr[i]! < num) {
        i++;
    }
    arr.splice(i, 0, num);
}

// Test with the original example
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// Test with larger input to show it's still efficient
const largeInput = Array.from({length: 1000}, (_, i) => i);
console.log("Testing with 1,000 elements...");
const start = Date.now();
const result = medianSlidingWindow(largeInput, 50);
const end = Date.now();
console.log(`Time taken: ${end - start}ms`);
console.log(`Number of medians calculated: ${result.length}`);
