#User function Template for python3
class Solution:
	def sentencePalindrome(self, s):
		# your code here
		lowPointer = 0
		highPointer = len(s)-1
		
		while(lowPointer<len(s)-1 and s[lowPointer].isalpha()==False):
		    lowPointer+=1
		while(highPointer>0 and s[highPointer].isalpha()==False):
		    highPointer-=1
		
		while (lowPointer<highPointer):
		    if (s[lowPointer]!=s[highPointer]):
		        return False
		    lowPointer+= 1 ##missed these udpates and got into an infinite loop
		    highPointer-= 1
		    while(lowPointer<len(s)-1 and s[lowPointer].isalpha()==False):
		        lowPointer+=1
		    while(highPointer>0 and s[highPointer].isalpha()==False):
		        highPointer-=1
		
		#if control reaches here, then it is a palindrome 
		return True
		
		    

#{ 
#  Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
	t = int (input ())
	for tc in range (t):
		s = input ()
		ob = Solution()
		if ob.sentencePalindrome (s):
			print (1)
		else:
			print (0)
# } Driver Code Ends