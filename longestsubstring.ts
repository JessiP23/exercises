// 340. Longest Substring with At Most K Distinct Characters

// In this problem, we are given a string s and an integer k. Our task is to find the length of the longest substring (which is a contiguous block of characters in the string) within s that contains at most k distinct characters.

// A distinct character means that no matter how many times the character appears in the substring, it is counted only once. For example, if k = 2, the substring "aabbc" has 3 distinct characters ('a', 'b', and 'c'), thus, it does not meet the requirement.

// The goal here is to achieve this while maximizing the length of the substring. A substring could range from containing a single character up to the length of the entire string, if k is sufficiently large to cover all distinct characters in the string s.

function longestSubstring(s: string, k: number): number {
    // contiguous
    // k = 2 != "aabbc" (3 unique characters) => 2 != 3
    // guarantee 1 character to max s.length
}