sum = int(input())
num = int(input())
s = 0

for i in range(num):
  a,b = map(int,input().split())
  s = s + (a*b)

if sum == s:
  print("Yes")
else:
  print("No")