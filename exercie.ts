// Global variables for moving average calculation
let sum: number = 0;           // Running sum of elements in the window
let count: number = 0;          // Total number of elements added
let windowData: number[] = [];  // Circular buffer to store window elements
let windowSize: number = 0;     // Maximum size of the sliding window

/**
 * Initializes the moving average with a given window size
 * @param size - The maximum number of elements in the sliding window
 */
function initMovingAverage(size: number): void {
    // Reset all global variables
    sum = 0;
    count = 0;
    windowSize = size;
    // Initialize circular buffer with zeros
    windowData = new Array(size).fill(0);
}

/**
 * Adds a new value to the data stream and returns the moving average
 * @param val - The new value to add to the stream
 * @returns The average of the last 'size' elements (or all elements if less than 'size')
 */
function next(val: number): number {
    // Calculate the index in the circular buffer using modulo
    const currentIndex: number = count % windowSize;
  
    // Update the running sum by removing the old value and adding the new value
    // When count < windowSize, windowData[currentIndex] is 0 (initialized value)
    sum = sum + val - windowData[currentIndex]!;
  
    // Store the new value in the circular buffer
    windowData[currentIndex] = val;
  
    // Increment the total count of elements added
    count++;
  
    // Calculate average: divide by the minimum of count and window size
    // This handles the case when we have fewer elements than the window size
    const elementsInWindow: number = Math.min(count, windowSize);
    return sum / elementsInWindow;
}
