// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        if(obj.findTriplets(arr, n)){
            console.log("1");
        }
        else{
            console.log("0");
        }
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
*/

class Solution {
    arrayHasGivenSumOfTwoNumbers(arr, sum, searchStartIndex, searchEndIndex){
        let low = searchStartIndex
        let high = searchEndIndex
        //this logic also works for -ve sum given an increasing range
        while (low<high){
            let currentSum = arr[low]+arr[high]
            if (currentSum === sum) return true;
            if (currentSum > sum) {//reduce next sum by reducing high
                high--; continue;
            }
            if (currentSum < sum) {
                low++; continue;
            }
        }
        return false
    }
    //Function to find triplets with zero sum.
    findTriplets(arr, n)
    {
        //your code here
        //there are only 3 ways of getting a zero sum
        //either they are a sum of 2 -ve numbers and 1 -ve number
        //or they are a sum of 1 -ve number and 2 +ve numbers
        //or they are 3 or more zeroes
        //expected complexities: time O(n2), space O(1)
        //sort the array O(nlogn), O(1)
        arr.sort((a,b)=>(a-b))
        //traverse the list for zeroCount and negativeCount and lastNegativeIndex
        let [zeroCount, negativeCount] = [0,0]
        let lastNegativeIndex
        arr.forEach((num, ix)=>{
            if (num===0) zeroCount++;
            if (num<0) {
                negativeCount++
                lastNegativeIndex = ix
            }
        })
        //if zeroCount>=3 return 1
        if (zeroCount>=3) return 1;
        let positiveCount = n-(negativeCount+zeroCount)
        if (positiveCount===0) return 0; //No positive numbers
        if (negativeCount===0) return 0;
        //When control reaches here negativeCount and positiveCount is atleast 1
        //Now find if arr has "1Negative and 2Positive" Triplet
        for (let i=0; i<=lastNegativeIndex; i++){
            let currentNegativeNum = arr[i]
            if (this.arrayHasGivenSumOfTwoNumbers(arr, (currentNegativeNum*-1), (lastNegativeIndex+1), (n-1))){
                return 1
            }
        }
        //Control reaches here if no "1Negative and 2Positive" Triplet found
        //Now find if arr has "2Negative and 1Positive" Triplet
        for (let i=lastNegativeIndex+1; i<n; i++){
            let currentPositiveNum = arr[i]
            if (this.arrayHasGivenSumOfTwoNumbers(arr, (currentPositiveNum*-1), 0, lastNegativeIndex)){
                return 1
            }
        }
        //Control reaches here if no valid triplet exists
        return 0
    }
    
}