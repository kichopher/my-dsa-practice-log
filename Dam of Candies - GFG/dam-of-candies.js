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
        let height = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            height[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.maxCandy(height, n);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} height
 * @param {number} n
 * @returns {number}
*/

class Solution{
    maxCandy(height,n){
        //code here
        // area is spaceBetween * min(leftHeight, rightHeight)
        // Have two pointers starting at either ends pLeft and pRight
        // store the maxArea in a variable
        // move whichever pointer which is at a lower height, 
        // moving the pointer at the bigger height won't help increase the area since the bottle-neck is the minimum height
        let pLeft = 0
        let pRight = n-1
        let maxArea = 0
        while (pLeft<pRight){
            let currentSpaceBetween = pRight - pLeft - 1
            let currentArea = currentSpaceBetween * Math.min(height[pRight],height[pLeft])
            maxArea = Math.max(maxArea, currentArea)
            if (height[pRight]<height[pLeft]){
                pRight--
            }else{
                pLeft++
            }
        }
        return maxArea
        
    }
}

