n = int(input())


def hanoi(n, p1, p2, p3):

    if n == 1:
        print(p1, p2)
        return
    hanoi(n-1, p1, p3, p2)
    print(p1, p2)
    hanoi(n-1, p3, p2, p1)
    
print(2**n-1)
hanoi(n,1,3,2)
