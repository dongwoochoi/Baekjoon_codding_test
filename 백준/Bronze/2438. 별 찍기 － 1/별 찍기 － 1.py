n = int(input())

for i in range(n+1):
    for j in range(i):
        print("*", end="")
        if j == i-1:
            print(" ")