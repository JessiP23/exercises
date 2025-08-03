
function medianSlidingWindow(nums: number[], k: number): number[] {
  
    let minHeap = new MinPriorityQueue<number>();
    let maxHeap = new MaxPriorityQueue<number>();
    let res = [];
    let d = new Map();

    for(let i=0; i<k; i++) {
        maxHeap.enqueue(nums[i]);
    }

    for(let i=0; i<Math.floor(k/2); i++) {
        minHeap.enqueue(maxHeap.dequeue());
    }

   
    res.push(k%2 === 0 ? (minHeap.front() + maxHeap.front())/2 : maxHeap.front());

    for(let i=k; i<nums.length; i++) {
        const toRemove = nums[i - k];
        d.set(toRemove, (d.get(toRemove) || 0) + 1);
        let balance = maxHeap.size() > 0 && maxHeap.front() >= toRemove ? -1 : 1;

        if(nums[i] <= maxHeap.front()) {
            maxHeap.enqueue(nums[i]);
            balance ++;
        }
        else {
            minHeap.enqueue(nums[i]);
            balance --;
        }

        if(balance > 0) {
            minHeap.enqueue(maxHeap.dequeue())
        }
        else if(balance < 0){
            maxHeap.enqueue(minHeap.dequeue())
        }

        while(maxHeap.size() > 0 && d.get(maxHeap.front()) > 0) {
            d.set(maxHeap.front(), d.get(maxHeap.front())- 1);
            maxHeap.dequeue();
        }

        while(minHeap.size() > 0 && d.get(minHeap.front()) > 0) {
            d.set(minHeap.front(), d.get(minHeap.front()) -1);
            minHeap.dequeue();
        }

        res.push(k % 2 === 0 ? (minHeap.front() + maxHeap.front())/2 : maxHeap.front());

    }

    return res;
    
};