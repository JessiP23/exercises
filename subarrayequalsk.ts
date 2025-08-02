// 560. Subarray Sum Equals K

// example
// input: [a,a,b,c,d], k = 2
// just stop until the sum of differnet characters is equal to k

// mapping key values
// 'a' -> 1
// 'b' -> 2
// move the right pointer
// once count == k shrink left window from the left

function findSubArrayToEqualK(nums: string[], k: number): number {
    let leftSideOfWindow: number = 0;
    let maxLength: number = 0;
    // const map: Map<key, value>
    const map: Map<string, number> = new Map<string,number>();

    for (let rightSideOfWindow: number = 0; rightSideOfWindow < nums.length; rightSideOfWindow++) {
        const currentCharacter: string = nums[rightSideOfWindow]!;
        // count the current character
        map.set(currentCharacter, (map.get(currentCharacter) ?? 0) + 1);

        while (map.size > k) {
            const leftCharacter: string = nums[leftSideOfWindow]!;
            map.set(leftCharacter, map.get(leftCharacter)! - 1);
            if (map.get(leftCharacter) === 0) {
                map.delete(leftCharacter);
            }
            leftSideOfWindow++;
        }

        maxLength = Math.max(maxLength, rightSideOfWindow - leftSideOfWindow + 1);
    }
    return maxLength;
}

console.log(findSubArrayToEqualK(['a', 'a', 'a', 'c', 'd'], 2));