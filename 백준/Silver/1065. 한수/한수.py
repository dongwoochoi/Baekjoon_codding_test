a = int(input())
han = 0

for i in range(1, a+1):
    a_list = list(map(int, str(i)))
    if i < 100:
        han += 1  
    elif a_list[0]-a_list[1] == a_list[1]-a_list[2]:
        han += 1  
print(han)