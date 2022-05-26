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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        obj.sortHalves(arr, n);
        printList(arr,n);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
*/

class Solution{
    sortHalves(arr,n){
        //code here
        //So the given array has 2 sorted parts of arbitrary sizes
        // note that they are not halves, so we have to first find where such a boundary is
        //Now once the boundaries of the two parts are determined, 
        // since we can use O(n) extra space, we can traverse both parts 
        //and insert the lower of the two into a new array until both arrays are exhausted
        //There is but an algorithm that uses Euclidean Division Lemma to sort two sorted arrays with TC O(m+n) and SC O(1)
        //if we use that here, we might be able to get the SC down to O(1) for O(n) time complexity.
        let arrayCopy = [...arr]
        let startIndexOf2ndPart = null
        for (let i=1; i<n; i++){
            if (arr[i-1] > arr[i]){
                startIndexOf2ndPart = i
                break
            }
        }
        //if startIndexOf2ndPart is still null, then the array is already sorted
        if (startIndexOf2ndPart===null){
            return //no return value is expected, the array itself is to be modified
        }
        //control reaches here if indeed there are 2 parts
        //let p1 be the pointer that traverses the 1st part
        // let p2 be the pointer that traverses the 2nd part
        let p1=0
        let p2=startIndexOf2ndPart
        let i = 0 //this is the update index of the original array
        while (p1<startIndexOf2ndPart && p2<n){
            let p1Candidate = arrayCopy[p1]
            let p2Candidate = arrayCopy[p2]
            if (p1Candidate <= p2Candidate){
                arr[i]=p1Candidate
                p1++; i++;
            }else{
                arr[i]=p2Candidate
                p2++; i++;
            }
        }
        //when control reaches here, it can be that one part is exhausted and the other part has numbers remaining
        // simply add the remaining numbers into the sortedArray
        while (p1<startIndexOf2ndPart){
            let p1Candidate = arrayCopy[p1]
            arr[i]=p1Candidate
            p1++; i++
        }
        while (p2<n){
            let p2Candidate = arr[p2]
            arr[i]=p2Candidate
            p2++; i++;
        }
    }
}


