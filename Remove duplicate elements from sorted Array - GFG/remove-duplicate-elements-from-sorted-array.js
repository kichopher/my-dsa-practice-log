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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
    let obj = new Solution();
    let res = obj.remove_duplicate(arr,n);
    printArray(arr,res);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 */

class Solution{
    remove_duplicate(arr,n){
        //code here
        //since array is sorted, the duplicate elements appear together
        let latestUniqueValue = null
        let p1 = 0 //slow pointer; proceeds only after filling a unique value
        for (let p2=0; p2<n; p2++){
            if(latestUniqueValue!== arr[p2]){
                //we have found the new unique value so fill at p1 and p1++
                latestUniqueValue = arr[p2]
                arr[p1] = arr[p2]
                p1++
            }
        }
        //note the value of p1. Let's say the value of p1 is i, all values till i-1 must be unique
        //=> slice the array from start to an index p1-1
        //But we have to return an integer which is the length denoting the size of the new array
        return p1
    }
}