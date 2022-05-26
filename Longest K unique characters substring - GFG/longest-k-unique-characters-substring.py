#User function Template for python3

class Solution:
    def updateCharCountDict(self, dictionary, char, changeInCount):
        if changeInCount>0:
            if char in dictionary:
                dictionary[char] += 1
            else:
                dictionary[char] = 1
        elif changeInCount<0:
            dictionary[char] -= 1
            if dictionary[char]<=0:
                del dictionary[char]
        return dictionary
        
                
    def longestKSubstr(self, s, k):
        # code here
        # this is a sliding/expanding window problem
        # Need a hashMap to store the character count of the current
        # Have a windowStartPointer initialised at 0
        # and windowEndPointer initialised at 1
        windowStartPointer = 0
        windowEndPointer = 1
        maxValidSubstringLength = -1
        charCountDict = {}
        charCountDict = self.updateCharCountDict( charCountDict, s[0], 1)
        charCountDict = self.updateCharCountDict(charCountDict, s[1], 1)
        # move the windowEndPointer as long as number of unique chars <=k
        # when unique char count > k, move the windowStartPointer by getting rid of 
        #   the char counts and eventually deleting a char from the hashMap
        # whenever unique char count is === k update maxValidSubstringLength
        while (True):
            uniqueCharCount = len(charCountDict)
            if (uniqueCharCount <= k):
                if (uniqueCharCount == k):
                    currentValidSubstringLength = windowEndPointer - windowStartPointer +1
                    maxValidSubstringLength = max(maxValidSubstringLength, currentValidSubstringLength)
                windowEndPointer += 1
                if (windowEndPointer < len(s)):
                    charCountDict = self.updateCharCountDict(charCountDict, s[windowEndPointer], 1)
                else:
                    break
            elif (uniqueCharCount > k):
                charCountDict = self.updateCharCountDict( charCountDict, s[windowStartPointer], -1)
                windowStartPointer += 1
                
        return maxValidSubstringLength
       
#{ 
#  Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()
        k = int(input())

        solObj = Solution()

        ans = solObj.longestKSubstr(s, k)

        print(ans)

# } Driver Code Ends