first_int = int(input())

if not(0 <= first_int <= 99):
    exit()
    
if 0 < int(first_int) <= 9:
    first_int = int(first_int) * 10
    
if int(first_int) == 0:
    print(1)
else:
    first = list(str(first_int))
    first_check = first
    i = 0
    while 1:
        first_sum = int(int(first[0])+int(first[1]))
        if first_sum > 9:
            first_sum = first_sum % 10
        first = [int(first[1]),first_sum]
        i = i + 1
        if first[0] == int(first_check[0]) and first[1] == int(first_check[1]):
            break
    print(i)