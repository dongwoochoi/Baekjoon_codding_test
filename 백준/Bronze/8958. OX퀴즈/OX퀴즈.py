a = int(input())

for i in range(a):
    b = input()
    list_b = list(b)
    c = 1
    sum = 0
    for i in list_b:
        if i == 'O':
            sum += c
            c += 1
        else:
            c = 1
    print(sum)