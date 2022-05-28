class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_soFar= nums[0]
        currMax = nums[0]
        arrLength= len(nums)

        for i in range(1,arrLength):
            currMax = max(nums[i], currMax + nums[i])
            max_soFar = max(currMax, max_soFar)

        return max_soFar
        