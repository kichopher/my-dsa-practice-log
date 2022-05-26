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
        let [n,sum] = readLine().trim().split(" ").map((x)=>parseInt(x));
        let arr = readLine().trim().split(" ").map((x)=>parseInt(x));
        let obj = new Solution();
        let res = obj.countTriplets(arr,n,sum);
        if(res===-0)
            res = 0;
        console.log(res.toString());
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

    countTriplets(arr,n,sum){
        //code here
        // sort the array 
        // traverse the sorted array from end => from n-1 till index 2
        // for current number at index i, 
        //   use the function countOfTripletsWithNumAtIndex_i_inSortedRange
        // that function will return the count of valid triplets with current number at i
        // add the returned count to the tripletCount variable
        // the function takes current number and the non-inclusive upper limit sum
        // the function uses two pointer method to find two more numbers in the range 0 to i-1
        // currentSum = arr[low] + arr[high] + arr[i]
        // whenever currentSum >= sum, high--
        // when currentSum < sum, note that for the current i and low
        //  high can take all values from high to low+1, so remember to count all of these
        //  and then update low++
        let tripletCount = 0
        arr.sort((a,b)=>(a-b))
        for (let i=n-1; i>=2; i--){
            tripletCount += this.countOfTripletsWithNumAtIndex_i_inSortedRange(arr, i, sum, 0, i-1)
        }
        return tripletCount
    }
    countOfTripletsWithNumAtIndex_i_inSortedRange(arr, i ,sum, searchStartIndex, searchEndIndex){
        let low = searchStartIndex
        let high = searchEndIndex
        let countOfValidPairs = 0
        while(low<high){
            let currentSum = arr[low] + arr[high] + arr[i]
            if (currentSum < sum){
                //what we should take note is that
                //with numbers at i and current low
                // there is high - low number of valid triplets
                // because reducing high will further reduce the sum
                countOfValidPairs+= high - low
                low++;
            }else{ //currentSum >= sum
                high--
                if (high===i) high--
            }
        }
        return countOfValidPairs
    }
}