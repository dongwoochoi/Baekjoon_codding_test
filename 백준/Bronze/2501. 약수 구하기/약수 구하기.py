a,b = map(int, input().split())

list_a = []

for i in range(a):
    if a%(i+1) == 0:
        list_a.append(i+1)

if b > len(list_a):
    print(0)
else:
    print(list_a[b-1])