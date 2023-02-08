a,b,c = map(int, input().split())

list_a = [a,b,c]
list_c = []

if a == b == c:
    list_c.append(a)
    list_c.append(a)


elif a == b:
    list_c.append(a)
    
elif a == c:
    list_c.append(a)
    
elif b == c:
    list_c.append(b)

    
if len(list_c) == 0:
    print(max(list_a)*100)
          
elif len(list_c) == 1:
    print(list_c[0]*100+1000)
          
elif len(list_c) == 2:
    print(list_c[0]*1000+10000)