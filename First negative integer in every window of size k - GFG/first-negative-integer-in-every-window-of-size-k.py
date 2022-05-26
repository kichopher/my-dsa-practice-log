#User function Template for python3

def printFirstNegativeInteger( A, N, K):
    # code here
    # for K the number of windows possible is N-K+1
    # Window start index goes from 0 to N-K
    ansArray = []
    def firstNegativeIntegerIndex_FromGivenStartIndex(A, searchStartIndex ):
        for i in range(searchStartIndex, len(A)):
            if A[i]<0:
                return i
        return None
    nextNegativeIntegerIndex = firstNegativeIntegerIndex_FromGivenStartIndex(A, 0)  
    for windowStartIndex in range(N-K+1):
        windowEndIndex = windowStartIndex + K -1
        if (nextNegativeIntegerIndex == None):
            ansArray.append(0)
        elif (windowStartIndex<=nextNegativeIntegerIndex<=windowEndIndex):
            ansArray.append(A[nextNegativeIntegerIndex])
        elif (nextNegativeIntegerIndex<windowStartIndex):
            nextNegativeIntegerIndex = firstNegativeIntegerIndex_FromGivenStartIndex(A, windowStartIndex)
            if (nextNegativeIntegerIndex == None):
                ansArray.append(0)
            elif (nextNegativeIntegerIndex <= windowEndIndex):
                ansArray.append(A[nextNegativeIntegerIndex])
            else:
                ansArray.append(0)
        else:
            ansArray.append(0)
    return ansArray
    
#{ 
#  Driver Code Starts
#Initial Template for Python 3

def main():

    T = int(input())

    while(T > 0):
        n = int(input())
        a = [int(x) for x in input().strip().split()]
        k = int(input())
        
        answer = printFirstNegativeInteger(a, n, k)
        for i in answer:
            print(i,end=" ")
        print()

        T -= 1


if __name__ == "__main__":
    main()


# } Driver Code Ends