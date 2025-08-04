// 239. Sliding Window Maximum
// use of deques, allow me to add/remove elements from the back and the front

// in this case lets work with sliding window
function maxSlidingWindow(nums: number[], k: number): number[] {
    const out: number[] = [];
    const dq: number[] = [];   // stores indices, NOT values
    let head = 0;              // virtual front pointer (avoids O(n) shift)
  
    for (let i = 0; i < nums.length; i++) {
      // 1. keep deque monotonically decreasing
      while (head < dq.length && nums[i]! >= nums[dq[dq.length - 1]!]!) {
        dq.pop();              // drop smaller/equal values
      }
      dq.push(i);              // 2. push current index
  
      // 3. remove indices that slid out of the window
      if (dq[head]! <= i - k) head++;
  
      // 4. record max once we have the first full window
      if (i >= k - 1) out.push(nums[dq[head]!]!);
    }
    return out;
  }

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));