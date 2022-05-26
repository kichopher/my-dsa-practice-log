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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x)); 
        let obj = new Solution();
        let res = obj.countTriplet(arr,n);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    
    countTriplet(arr,n){
       //code here
       //Just like the previous triplet problems:
       // sort the array
       //  we need a function to check if given 2 number sum exists in given sorted range
       // traverse the sorted array from index n-1 to 2
       // traversing in reverse since in an ascendingly sorted array of +ve integers
       // a number can be got only by summing up 2 numbers lesser than it
       // for each of those numbers, find if 2 numbers exist in the range 0 to i-1 whose sum is the number
       //*** there can be multiple such pairs in the range that sums up to the value
       //*** so remember to count them all.
       arr.sort((a,b)=>a-b)
       let tripletCount = 0
       for (let i=n-1; i>=2; i--){
           tripletCount += this.arrayHasGiven2NumberSumInGivenSortedRange(arr, arr[i], 0, i-1)
       }
       return tripletCount
    }
    arrayHasGiven2NumberSumInGivenSortedRange(arr, sum, searchStartIndex, searchEndIndex){
        let low = searchStartIndex
        let high = searchEndIndex
        let countOfSuchOccurences = 0
        while (low<high){
            let currentSum = arr[low] + arr[high]
            if (currentSum === sum) {
                countOfSuchOccurences++
                high--
            }
            else if (currentSum>sum) high--;
            else low++;
        }
        return countOfSuchOccurences
    }
}