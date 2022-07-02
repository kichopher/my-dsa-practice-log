/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //O(logn) solution using binary search
    //initialise lo=0 and hi=nums.length-1
    //step 1: calculate mid using lo and hi
    //Use the fact that the nums array when divided into two will have a sorted half and an unsorted half
    //Find the sorted half, then check if the target falls within the range of the sorted half
    //if so do binary search in that range and return the index or -1
    //else take the unsorted half as the new array and repeat from step 1
    let lo=0
    let hi=nums.length -1
    function binarySearchGivenRange(nums, target, startIx, endIx){
        while (startIx <= endIx){
            let mid= Math.floor((startIx + endIx)/2)
            if (nums[mid] === target) return mid
            else if (nums[mid] > target) endIx = mid -1
            else if (nums[mid] < target) startIx = mid + 1
        }
        return -1
    }
    while (lo <= hi){
        if (lo === hi) return (nums[lo]===target ? lo : -1)
        //control reaches here if there is atleast 2 elements in the range
        let mid = Math.floor((lo+hi)/2)
        let sortedRange = [null, null]
        let unsortedRange = [null, null]
        if (nums[lo] <= nums[mid]){
            sortedRange[0] = lo
            sortedRange[1] = mid
            unsortedRange[0] = mid+1
            unsortedRange[1] = hi
        }else{
            unsortedRange[0] = lo
            unsortedRange[1] = mid
            sortedRange[0] = mid+1
            sortedRange[1] = hi
        }
        // console.log(sortedRange, unsortedRange)
        if (nums[sortedRange[0]] <= target && target <= nums[sortedRange[1]]){
            return binarySearchGivenRange(nums, target, sortedRange[0], sortedRange[1])
        }else{
            lo = unsortedRange[0]
            hi = unsortedRange[1]
        }
    }
    return -1
};