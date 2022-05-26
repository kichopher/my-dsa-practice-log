#User function Template for python3

#Function to return the count of the number of elements in
#the intersection of two arrays.
class Solution:
    def NumberofElementsInIntersection(self,a, b, n, m):
        #return: expected length of the intersection array.
        
        #code here
        #make a the smaller array and b the bigger array
        if (n>m):
            n,m = m,n
            a,b = b,a
        #now create a set using the elements from a, the smaller array
        setOfNumbersIn_a = set(a)
        setOfIntersectingValues = set()
        #now traverse the array b, the bigger array and increment countOfIntersectingNumbers
        #  whenever setOfNumbersIn_a has b[i] 
        for i in range(m):
            if (b[i] in setOfNumbersIn_a):
                setOfIntersectingValues.add(b[i])
        return len(setOfIntersectingValues)

#{ 
#  Driver Code Starts
#Initial Template for Python 3


if __name__=='__main__':
    t=int(input())
    for _ in range(t):
        
        n,m=[int(x) for x in input().strip().split()]
        
        a=[int(x) for x in input().strip().split()]
        b=[int(x) for x in input().strip().split()]
        ob = Solution()
        
        print(ob.NumberofElementsInIntersection(a,b,n,m))
        
                
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
                
# } Driver Code Ends