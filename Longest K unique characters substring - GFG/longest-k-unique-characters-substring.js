// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function printArray(res, n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];;
        s+=" "; 
    }
    console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s = readLine();
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.longestKSubstr(s, k);
    console.log(res);
  }
}


// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    longestKSubstr(s, k) {
        //code here
        //Use a hashmap where key:value pairs are key=>character, value=>number of repitition
        //if character count is 0 then that character entry must be deleted from the hashmap
        //have a windowStart pointer starting at 0
        // and a windowEnd pointer at 0
        //so the initial window length or the substring length would be 1
        //initialize a variable maxValidSubstringLength = -1
        //The number of unique characters in the window will be given by the hashMap
        //Enter the first character into the hashmap
        //while the number of unique characters is less than k
        // move the windowEnd pointer by adding the new character into the hashmap
        //  when there is no more room to expand, the while loop must exit by returning the maxValidSubstringLength
        //when the number of unique characters is equal to k
        // update the maxValidSubstringLength and update the windowEnd pointer if possible, otherwise exit by returning maxValidSubstringLength
        //while the number of unique characters is greater than k
        // shrink the window by moving windowStart while also removing the char from the hashmap
        //there won't come a time when shrinking is triggered to the point where windowStart crosses windowEnd, since shrinking is only triggered when there are more than k unique chars in the window
        let n = s.length
        let charCountMap = new Map()
        let windowStart = 0
        let windowEnd = 0
        let maxValidSubstringLength = -1
        const increaseCharCount = (charCountMap, char)=>{
            if (charCountMap.has(char)) charCountMap.set(char, charCountMap.get(char)+1)
            else charCountMap.set(char, 1)
        }
        const decreaseCharCount = (charCountMap, char)=>{
            //when this function is called, the char will be present in the charCountMap
            let currentCharCount = charCountMap.get(char)
            if (currentCharCount === 1) charCountMap.delete(char)
            else charCountMap.set(char, currentCharCount-1)
        }
        increaseCharCount(charCountMap, s[0]) //inserting the first character
        while(true){
            let uniqueCharCount = charCountMap.size
            if(uniqueCharCount < k){
                //window must be expanded, but first check if it is possible
                if (windowEnd+1 >=n) return maxValidSubstringLength
                else increaseCharCount(charCountMap, s[++windowEnd])
            }//control reaches here when uniqueCharCount >=k
            else if(uniqueCharCount === k){
                let currentValidSubstringLength = windowEnd - windowStart +1
                maxValidSubstringLength = Math.max(maxValidSubstringLength, currentValidSubstringLength)
                //expand window, but check if it is possible first
                if (windowEnd+1 >=n) return maxValidSubstringLength
                else increaseCharCount(charCountMap, s[++windowEnd])
            }
            else if(uniqueCharCount >k){
                //shrink window, but decrease count of current char from hashmap before shrinking
                decreaseCharCount(charCountMap, s[windowStart])
                windowStart++
            }
        }
        
    }
}
