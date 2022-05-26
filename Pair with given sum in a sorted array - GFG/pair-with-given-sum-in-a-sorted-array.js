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
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.Countpair(arr, n, k);
    console.log(res);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

class Solution {
  Countpair(arr, n, k) {
    //code here
    // have two pointers, 1 on the left and 1 on the right
    //at first the left pointer points to the lowest number and right pointer points to the highest number
    //given a sorted array with distinct elements we have to count the number of pairs that sums up to k
    let countOfValidPairs = -1
    let low = 0
    let high = n-1
    const updateCountOfValidPairs = ()=>{
        if (countOfValidPairs<=0){
            countOfValidPairs = 1
        }else countOfValidPairs++
    }
    while (low<high){
        let currentSum = arr[low]+arr[high]
        if (currentSum===k){
            //all valid pairs with arr[low] and arr[high] are found
            // since these numbers can't make any more valid pairs
            // Hence udate both low and high after updating count
            updateCountOfValidPairs()
            low++
            high--
        }else if(currentSum>k) high--
        else low++
    }
    return countOfValidPairs
  }
}