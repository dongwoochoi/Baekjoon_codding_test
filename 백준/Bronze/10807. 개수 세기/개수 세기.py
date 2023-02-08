n = int(input())
a = list(map(int, input().split()))
v= int(input())
num = 0

for i in range(n):
  if a[i] == v:
    num = num + 1

print(num)