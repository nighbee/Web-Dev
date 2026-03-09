# a 
def min4(a, b, c, d):
    return min(a, b, c, d)

a, b, c, d = map(int, input().split())
print(min4(a, b, c, d))

# b 
def power(a, n):
    res = 1.0
    for _ in range(n):
        res *= a
    return res

a, n = map(float, input().split())
print(power(a, int(n)))
#c 
def xor(x, y):
    return x != y

x, y = map(int, input().split())

if xor(bool(x), bool(y)):
    print(1)
else:
    print(0)