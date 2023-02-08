a = int(input())
b = int(input())
point = [a,b]
if point[0] > 0 and point[1] > 0:
    print("1")
elif point[0] > 0  and point[1] < 0:
    print("4")
elif point[0] < 0 and point[1] < 0:
    print("3")
elif point[0] < 0 and point[1] > 0:
    print("2")