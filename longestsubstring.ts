// 340. Longest Substring with At Most K Distinct Characters
// Given a string, find the length of the longest substring T that contains at most k distinct characters

function longestSubstring(s: string, k: number): number {
    // define a mapping
    let count: Map<string, number> = new Map();
    let left = 0;

    for (const c of s) {
        count.set(c, (count.get(c) ?? 0) + 1);

        if (count.size > k) {
            count.set(s[left]!, (count.get(s[left]!) ?? 0) - 1);

            if (count.get(s[left]!) === 0) {
                count.delete(s[left]!)
            }
            left++;
        }
    }
    return s.length - left;
}

console.log(longestSubstring("ececebababa", 2));