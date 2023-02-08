a,b = input().split()
a_r = []
b_r = []
an = ""
bn = ""
for a in reversed(a):
  a_r.append(a)

for b in reversed(b):
  b_r.append(b)

for i in range(3):
  an = an+a_r[i]
  bn = bn+b_r[i]

if an > bn:
  print(an)
else:
  print(bn)