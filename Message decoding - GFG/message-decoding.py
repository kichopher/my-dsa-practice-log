#User function Template for python3

class Solution:

    def decode(self, S):
        # code here
        # the letters of the word hello should appear in the correct order but with 
        # can be embedded within the given string surrounded by other characters
        #return True if hello is present in the given string S, else return False
        
        #Have a variable requiredCode = 'hello'
        # have a pointer helloCharPointer that starts at index 0 => character h
        # now traverse the string S
        # whenever currentChar from string S is equal to char in hello at index helloCharPointer,
        #  move helloCharPointer by 1, (return True and exit if helloCharPointer == len(requiredCode) after update)
        #if the string traversal exits without returning True, then return False since hello is not present
        requiredCode = "hello"
        helloCharPointer = 0
        for i in range(len(S)):
            currentChar = S[i]
            if (currentChar == requiredCode[helloCharPointer]):
                helloCharPointer += 1
                if (helloCharPointer >= len(requiredCode)):
                    return True
        return False
        

#{ 
#  Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        s = input()

        solObj = Solution()

        ans = solObj.decode(s)

        if ans:
            print(1)
        else:
            print(0)
# } Driver Code Ends