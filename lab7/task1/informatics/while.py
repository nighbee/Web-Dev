n = int(input())
i = 1
while i * i <= n:
    print(i * i)
    i += 1
    
    
# b 
n = int(input())
i = 2
while n % i != 0:
    i += 1
print(i)

# c 

n = int(input())
power_of_two = 1

while power_of_two <= n:
    print(power_of_two, end=' ')
    power_of_two *= 2
    
# d
n = int(input())

power_of_two = 1
while power_of_two < n:
    power_of_two *= 2

if power_of_two == n:
    print("YES")
else:
    print("NO")
#e 

n = int(input())

k = 0
power_of_two = 1

while power_of_two < n:
    power_of_two *= 2
    k += 1

print(k)