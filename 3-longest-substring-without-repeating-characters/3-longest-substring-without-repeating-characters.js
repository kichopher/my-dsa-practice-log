/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //Approach using Hashmap to keep character counts and two pointer (shrinking and expanding window) TC: O(n), SC: O(1) 
    //if string length is 0 return 0
    //else, declare a variable maxValidSubstringLength = 1, since that is the minimum it can be
    //define a function increaseCharCount which adds or increases the count of the given character in a given hashmap
    //define a function decreaseCharCount which decreases the count of an existing character, if the charcount becomes 0 then delete the entry
    //the hashmap stores key:value where key=> character, and value=> character count of the particular character
    //Have two pointers that bounds a substring 
    // windowStart, and windowEnd both of them are initialised as index 0
    //and now we have a window size of windowEnd-windowStart+1 which is one
    // and correspondingly the first character is to be entered in the hashmap using the appropriate function call
    //Now grow the window by increasing windowEnd and whenever that happens the hashmap is to be updated
    //Checking if there are repeating characters in the current window is determined by
    // comparing the hashmap size with the window size
    // if hashmap size is not equal(less than) the window size, then there is repeating characters
    //if there are repeating characters then shrink the window (by also removing the char from hashmap before increasing windowStart)
    //if there are no repeating characters, update maxValidSubstringLength and expand the window by increasing windowEnd. When windowEnd can't be expanded, exit and return maxValidSubstringLength
    let n = s.length
    if (n===0) return 0;
    let charCountMap = new Map()
    const increaseCharCount=(charCountMap, char)=>{
        if (charCountMap.has(char)) {
            let currentCharCount = charCountMap.get(char)
            charCountMap.set(char, currentCharCount+1)
        }else charCountMap.set(char, 1)
    }
    const decreaseCharCount=(charCountMap, char)=>{
        let currentCharCount = charCountMap.get(char)
        if (currentCharCount ===1) charCountMap.delete(char)
        else charCountMap.set(char, currentCharCount-1)
    }
    let windowStart = 0
    let windowEnd = 0 
    let maxValidSubstringLength = 1
    increaseCharCount(charCountMap, s[0])
    while(windowEnd<n){
        let currentSubstringLength = windowEnd - windowStart + 1
        let substringHasRepeatingChars = (charCountMap.size !== currentSubstringLength)  //boolean
        if (substringHasRepeatingChars){
            //shrink
            decreaseCharCount(charCountMap, s[windowStart])
            windowStart++
        }else{
            //update maxValidSubstringLength and update windowEnd to expand
            maxValidSubstringLength = Math.max(maxValidSubstringLength, currentSubstringLength)
            if (windowEnd+1 >=n) break;
            increaseCharCount(charCountMap, s[++windowEnd])
        }
        
    }
    return maxValidSubstringLength
    
};