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

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let sum = parseInt(readLine());
    let obj = new Solution();
    let res = obj.findMaxSubarraySum(arr, n, sum);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

class Solution {
  findMaxSubarraySum(arr, n, sum) {
    //code here
    
    // Expected time complexity is O(n)
    // Use a grow and shrink approach
    //windowStart and windowEnd pointers will be at index 0 in the beginning
    //If currentWindowSum is greater than "sum", it is time to shrink the window to reduce the sum
    // When window can't be shrinked because windowStart===windowEnd, move both pointers to the next index
    //If currentWindowSum is lesser than "sum", window has to be grown by moving the windowEnd pointer
    //If windowEnd pointer is at the boundary then exit
    //At each step calculate and update currentWindowSum, 
    //Exit when currentWindowSum===sum, by returning X
    // update minimumValidWindowSum only when currentWindowSum is less than given sum
    
    //when all numbers are higher that the sum, there would be no subarray which can create a sum
    // so the minimum sum would be 0
    let maxValidSubarraySum = 0 
    let windowStart = 0
    let windowEnd = 0
    let currentWindowSum = arr[0]
    while(true){ //changing from windowStart<=windowEnd
        if (currentWindowSum===sum) return sum; //because it can't get better than this
        else if (currentWindowSum<sum){
            //time to update the maxValidSubarraySum
            //and now the window has to be grown by moving windowEnd inorder to increase sum
            //if windowEnd cannot be moved, exit by returning maxValidSubarraySum 
            maxValidSubarraySum = Math.max(maxValidSubarraySum, currentWindowSum)
            if (windowEnd+1 >= n){
                return maxValidSubarraySum
            }
            windowEnd++
            currentWindowSum += arr[windowEnd]
        }else if (currentWindowSum>sum){
            //it is time to reduce the sum by shrinking the window, by moving windowStart
            //if window cannot be shrunk (when windowStart===windowEnd)
            // move both pointers to the next index
            // if next index is not available, return maxValidSubarraySum and exit
            if (windowStart===windowEnd){
                //shrinking not possible so move both to the next index
                if (windowStart+1 >= n){
                    return maxValidSubarraySum
                }else{
                    windowStart += 1
                    windowEnd = windowStart
                    currentWindowSum = arr[windowStart]
                }
            }else{//NB!!: Forgot to add else here, which failed the first submission!!!
            currentWindowSum -= arr[windowStart] //NB!!: shrinking sum before updating windowStart..
            windowStart += 1 //shrinking
            }
        }
        
    }
    
  }
}