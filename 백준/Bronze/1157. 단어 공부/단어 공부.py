a = list(input().upper())
b = set(a)
b = list(b)
c = []

for i in b:
    k = a.count(i)
    c.append(k)
    
if c.count(max(c)) > 1:
    print('?')
else:
    nn = c.index(max(c))
    print(b[nn])