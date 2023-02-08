h,m = map(int, input().split())
time = int(input())

if time > 60:
    h = int(h + (time/60))
    if ((time%60) + m) > 60:
        m = ((time%60) + m) - 60
        h = h + 1
    else :
        m = ((time%60) + m)

else :
    if (time+m) > 60:
        m = (time + m)%60
        h = h + 1
    else:
        m = m + time

if m >= 60:
        h = h + 1
        m = m - 60

if h == 24:
    h = 0
elif h > 24:
    h = h%24
    
print(h,m)