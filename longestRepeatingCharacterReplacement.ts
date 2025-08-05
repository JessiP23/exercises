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

let left: number = 0;
let right: number = 0;
let charCount: number[] = new Array(26).fill(0);
let maxCharCount: number = 0;

function characterReplacement(s: string, k: number): number {
    // initalize all variables for new sample
    right = 0;
    left = 0;
    charCount.fill(0);
    maxCharCount = 0;
    
    for (right = 0; right < s.length; right++) {
        // analyze the fist value and ad it ot the array based on its  unicode value
        charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]!++;
        maxCharCount = Math.max(maxCharCount, charCount[s.charCodeAt(right)- 'A'.charCodeAt(0)]!)
        // analyze like if there are more variables or space than k permitted
        if (right - left + 1 - maxCharCount > k) {
            // in here i need to subtract the left character by 1
            charCount[s.charCodeAt(left) - 'A'.charCodeAt(0)]!--;
            left++;
        }
    }
    return right - left;
}

console.log(characterReplacement("ABAB", 2));