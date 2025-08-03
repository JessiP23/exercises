// Moving Average from Data Stream
// consider having a space complexity o(1)
// we dont calculate a big o notation

// MovingAverage

let size: number;
let sum: number = 0;
let count: number = 0;
// hold the size values -> array
let values: number[];

function initializeMovingAverage(windowSize: number): void {
    size = windowSize;
    sum = 0;
    count = 0;
    values = new Array(windowSize).fill(0);
}

// update the moving average when adding a new value to the stream
function next(value: number): number{
    // detect the index inside the circular buffer. 
    let index = count % size;
    // update the sume by adding the new value and subtract the value that is been replaced
    sum += value - values[index]!;
    // assing the new value to the appropriate position int he circular buffer
    values[index] = value;

    // increase the count of the total number of values processsed
    count++;
    return sum / Math.min(count, size);
}

initializeMovingAverage(6);
let avg1 = next(3);
let avg2 = next(1);
let avg3 = next(5);
let avg4 = next(7);
let avg5 = next(6);
let avg6 = next(4);

console.log(avg1, avg2, avg3, avg4, avg5, avg6);


// data stream
// [0,0,0] -> [5,0,0] -> [5,1,0] -> [5,1,5]