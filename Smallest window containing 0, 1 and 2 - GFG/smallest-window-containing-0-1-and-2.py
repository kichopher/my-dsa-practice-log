#User function Template for python3

class Solution:
    def smallestSubstring(self, S):
        # Code here
        # maintain a python dictionary to keep count of 0, 1 and 2 => countDict={0:0, 1:0, 2:0}
        dictOf_012Count = {'0': 0, '1':0, '2':0}
        
        def incrementCountOfGivenChar(char012):
            if (char012=='0' or char012=='1' or char012=='2'):
                dictOf_012Count[char012] += 1
        
        def decrementCountOfGivenChar(char012):
            if (char012=='0' or char012=='1' or char012=='2'):
                dictOf_012Count[char012] -= 1 #don't have to worry about -ve count because that will never happen
        
        def has012():#returns True if count of all the 3 chars are atleast 1
            countOf_0 = dictOf_012Count['0']
            countOf_1 = dictOf_012Count['1']
            countOf_2 = dictOf_012Count['2']
            if (countOf_0>0 and countOf_1>0 and countOf_2>0):
                return True
            else:
                return False
        
        # have a windowStart pointer starting at 0 and windowEnd pointer starting at 1
        windowStart = 0
        windowEnd = 0
        minValidWindowLength = -1
        # increment count of 1st character
        incrementCountOfGivenChar(S[0])
        while(windowEnd<len(S)):
            while(has012()==False):
                # now grow the window by moving windowEnd, until count of 0,1 and 2 is atleast 1 for all
                windowEnd += 1
                if windowEnd>=len(S):
                    break
                #when control reaches here , it is safe to access the string and increment char count
                incrementCountOfGivenChar(S[windowEnd])
            if (has012()==False): 
                #if has012() is still False after exiting the above while loop, 
                #  this means that there is no valid windows anymore
                break
            #when control reaches here the window is valid 
            # and it is time to update the minValidWindowLength
            currentValidWindowLength = windowEnd - windowStart + 1
            if minValidWindowLength == -1:
                minValidWindowLength = currentValidWindowLength
            else:
                minValidWindowLength = min(minValidWindowLength,currentValidWindowLength)
            # now shorten the window by increasing start and decrementing the corresponding char from dictionary if 0 , 1 or 2
            decrementCountOfGivenChar(S[windowStart])
            windowStart += 1
        
        return minValidWindowLength
        
#{ 
#  Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	t=int(input())
	for i in range(t):
		S = input()
		ob = Solution()
		ans = ob.smallestSubstring(S)
		
		print(ans)



# } Driver Code Ends