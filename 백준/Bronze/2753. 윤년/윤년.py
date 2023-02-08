c = input()
c = int(c)
if c%4 == 0:
    if (c%100 != 0) or (c%400 == 0):
        print("1")
    else:
        print("0")
else:
    print("0")