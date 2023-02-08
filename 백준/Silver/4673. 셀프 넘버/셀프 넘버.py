def d():
    self = set()
    l = set()
    for k in range(1,10000):
        l.add(k)
    for i in range(1,10001):
        for j in str(i):
            i = i + int(j)
        self.add(i)

    self = l - self
    self = sorted(self)
    for z in self:
        print(z)
d()  