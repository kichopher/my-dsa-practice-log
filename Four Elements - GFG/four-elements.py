#User function Template for python3

def find4Numbers( A, n, X):
    # return true or false
    # use the algorithm to find a triplet having given sum takes O(n2)
    # nest it inside this algorithm to find the quaduplet having given sum in O(n3)

    #Sort the array first, and then traverse from i=0 till i=n-4
    A.sort()
    #for each number at i search the rest of the range for a valid Triplet that has sum = X - arr[i]
    for i in range(n-3):
        #for each number at index j=i+1 search the rest of of the range till j= n - 3
        # find if there are valid pairs that gets the quadruplet sum to X
        for j in range(i+1, n-2):
            low = j+1
            high = n-1
            while(low<high):
                quadrupletSum = A[i]+A[j]+A[low]+A[high]
                if (quadrupletSum == X):
                    return True
                elif(quadrupletSum<X):
                    #try increasing the sum by increasing low
                    low += 1
                else:
                    #try decreaseing the sum by decreasing high
                    high -= 1
    #if control reaches here, then there is no valid quadruplets, so return False
    return False
                    
            



#{ 
#  Driver Code Starts
#Initial Template for Python 3

def main():

    T = int(input())

    while(T > 0):
        n = int(input())
        A = [int(x) for x in input().strip().split()]
        X = int(input())
        
        if find4Numbers(A, n, X):
            print(1)
        else:
            print(0)

        T -= 1


if __name__ == "__main__":
    main()


# } Driver Code Ends