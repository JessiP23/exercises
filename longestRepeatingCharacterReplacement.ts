// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above 

// exmaple 1: 
// input: s="ABAB", k=2
// output: 4
// explanation: replace the two 'A's with two 'B's or vice versa

// example 2:
// input: s="AABABBA", k=1
// output: 4


// lets do a counter for each letter's frequency within the sliding window
const charCount: number[] = new Array(26).fill(0);

// left inddex of the sliding window
let left: number = 0;

// right index of the sliding window
let right: number = 0;

// variable to keep track of the most frequent character within the window
let maxCharCount: number = 0;

function characterReplacement(s: string, k: number): number {
    charCount.fill(0);
    left = 0;
    right = 0;
    maxCharCount = 0;

    for (right = 0; right < s.length; right++) {
        // this part of the code gets the unicode value of the current character
        // A: 65, B: 66, C: 67, etc.
        // we subtract the unicode value of 'A' to get the index of the character in the charCount array
        charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]!++;
        // update the most frequent character count
        maxCharCount = Math.max(maxCharCount, charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]!);

        // check if the current window size minus the count of the max frequency character is greater than k. If so, shrink the window from the left
        if (right - left + 1 - maxCharCount > k) {
            // decrement the count for the character that is existing the window
            charCount[s.charCodeAt(left) - 'A'.charCodeAt(0)]!--;
            left++;
        }
    }
    return right - left;
}

console.log(characterReplacement("ABAB", 2));