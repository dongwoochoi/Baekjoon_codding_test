a = int(input())

def fac(a):
    if a == 0:
        return 1
    if a == 1:
        return 1
    return a*fac(a-1)

print(fac(a))