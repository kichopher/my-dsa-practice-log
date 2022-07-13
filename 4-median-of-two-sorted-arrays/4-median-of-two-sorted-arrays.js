/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //Approach 1: TC O(n+m) solution: Find the indeces in a merged array of length m+n 
    // that will make the median => if m+n is odd, median is the element at index (m+n-1)/2 
    // if m+n is even, median is half of sum of elements at indeces (m+n-1)/2 ,((m+1-1)/2 -1)
    
    //Approach 2: TC O(log(n+m)) solution, using binary search
    //nums1 should be the array of lesser length
    if (nums1.length > nums2.length) {
        let temp = nums1
        nums1 = nums2
        nums2 = temp
    }
    let n = nums1.length
    let m = nums2.length
    //midIndexInMergedArray = Math.floor((m+n)/2)
    //partitionIndex_nums1 in nums1 can be 0 to n (note that the upper bound is n and not n-1)
    //partitionIndex_nums2 in nums2 is then midIndexInMergedArray - partitionIndex_nums1
    let lo = 0
    let hi = n //note that the upper bound is n and not n-1
    let midIndexInMergedArray = Math.floor((m+n)/2)
    while (lo <= hi){
        let partitionIndex_nums1 = Math.floor((hi+lo)/2)
        let partitionIndex_nums2 = midIndexInMergedArray - partitionIndex_nums1
        
        //the partition in nums1 divides nums 1 into a left part and a right part
        // similarly the partition in nums2 divides it into a left part and a right part
        // nums1_leftPartMax is the number to the left of partitionIndex_nums1 (-Infinity if partitionIndex_nums1 is <=0)
        // nums1_rightPartMin is the number at partitionIndex_nums1 (+Infinity if partitionIndex_nums1 is >=n)
        // nums2_leftPartMax is the number to the left of partitionIndex_nums2 (-Infinity if partitionIndex_nums2 is <=0)
        // nums1_rightPartMin is the number at partitionIndex_nums2 (+Infinity if partitionIndex_nums2 is >=m) 
        let nums1_leftPartMax = partitionIndex_nums1 > 0 ? 
            nums1[partitionIndex_nums1 - 1] : -Infinity
        let nums1_rightPartMin = partitionIndex_nums1 < n ? 
            nums1[partitionIndex_nums1] : Infinity
        let nums2_leftPartMax = partitionIndex_nums2 > 0 ? 
            nums2[partitionIndex_nums2 - 1] : -Infinity
        let nums2_rightPartMin = partitionIndex_nums2 < m ? 
            nums2[partitionIndex_nums2] : Infinity
        
        if (nums1_leftPartMax <= nums2_rightPartMin && nums2_leftPartMax <= nums1_rightPartMin){
            console.log({nums1_leftPartMax,nums2_leftPartMax,nums1_rightPartMin,nums2_rightPartMin})
            //we have arrived at the correct partition, return the median
            if ((m+n)%2 === 0){
                let medianVal = (Math.max(nums1_leftPartMax, nums2_leftPartMax) + Math.min(nums1_rightPartMin, nums2_rightPartMin)) /2
                return medianVal
            }
            else{
                return Math.min(nums1_rightPartMin, nums2_rightPartMin)
            }
        }
        else if (nums1_leftPartMax > nums2_rightPartMin){
            hi = partitionIndex_nums1 - 1
        }
        else{
            lo = partitionIndex_nums1 + 1
        }        
    }
};