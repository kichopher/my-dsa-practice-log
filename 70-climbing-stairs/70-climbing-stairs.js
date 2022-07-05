/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //nth step can be reached from n-1th step or n-2th step
    // therefore number of ways to reach nth step =
    //  number of ways to reach n-1th step 
    // + number of ways to reach n-2th step
    if (n<=0) return 0
    if (n===1) return 1 //1st step can be reached in 1 way only
    if (n===2) return 2 // 2nd step can be reached by jumping 2 steps, or from step 1
    
    //control reaches here if n > 2
    // to calculate for steps 3 and beyond:
    let waysToReach_1StepBack = climbStairs(2)
    let waysToReach_2StepsBack = climbStairs(1)
    for (let i=3; i<=n; i++){
        let waysToReach_ithStep = waysToReach_1StepBack + waysToReach_2StepsBack
        if (i===n) return waysToReach_ithStep
        
        //prepare for next iteration
        waysToReach_2StepsBack = waysToReach_1StepBack
        waysToReach_1StepBack = waysToReach_ithStep
    }
    
};