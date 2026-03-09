a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=' ')
        
        
        
# b 
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b + 1):
    if i % d == c:
        print(i, end=' ')
        
# c
import math

a = int(input())
b = int(input())

start = math.ceil(a**0.5)
end = math.floor(b**0.5)

for i in range(start, end + 1):
    print(i * i, end=' ')
    
    
# g 
x = int(input())

for i in range(2, int(x**0.5) + 1):
    if x % i == 0:
        print(i)
        break
else:
    print(x)

#h 
x = int(input())
divisors = []

for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        divisors.append(i)
        if i*i != x:
            divisors.append(x // i)

divisors.sort()
print(*(divisors))
#i 
x = int(input())
count = 0
i = 1
while i * i <= x:
    if x % i == 0:
        if i * i == x:
            count += 1
        else:
            count += 2
    i += 1
print(count)

#j 
total = 0
for _ in range(100):
    total += int(input())
print(total)
# k 

n = int(input())
total = 0
for _ in range(n):
    total += int(input())
print(total)


# m 
n = int(input())
count = 0
for _ in range(n):
    if int(input()) == 0:
        count += 1
print(count)