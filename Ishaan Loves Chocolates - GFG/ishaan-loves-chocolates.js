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
        let res = obj.chocolates(arr, n);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution{
    chocolates(arr,n){
        //code here
        // Reduce the array such that the tastiest square is eaten at each step, 
        //  until only one square is left
        // return the value of the last square when reached
        let pl = 0; //the left side pointer
        let pr = n-1; //the right side pointer
        const remainingSquares = (pl,pr) => pr - pl + 1
        while (remainingSquares(pl,pr) > 1){
            if (arr[pl]>arr[pr]){
                pl++
            }else{
                pr--
            }
        }
        return arr[pl] //at this instance both pr and pl will be equal
    }
}

