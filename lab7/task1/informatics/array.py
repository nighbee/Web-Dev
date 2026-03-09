# a 
n = int(input())
array = list(map(int, input().split()))

# Выводим элементы с индексами 0, 2, 4... с помощью среза
result = array[::2]
print(*(result)) 

# b 
n = int(input())
array = list(map(int, input().split()))

for x in array:
    if x % 2 == 0:
        print(x, end=' ')

#c 
n = int(input())
array = list(map(int, input().split()))

count = 0
for x in array:
    if x > 0:
        count += 1

print(count)
# d 
n = int(input())
array = list(map(int, input().split()))

count = 0
for i in range(1, n):
    if array[i] > array[i - 1]:
        count += 1

print(count)

# e 
n = int(input())
array = list(map(int, input().split()))

found = False
for i in range(1, n):
    if (array[i] > 0 and array[i - 1] > 0) or (array[i] < 0 and array[i - 1] < 0):
        found = True
        break

if found:
    print("YES")
else:
    print("NO")

# f 
n = int(input())
array = list(map(int, input().split()))

count = 0
for i in range(1, n - 1):
    if array[i] > array[i - 1] and array[i] > array[i + 1]:
        count += 1

print(count)

# g 
n = int(input())
array = list(map(int, input().split()))

for i in range(n // 2):
    array[i], array[n - 1 - i] = array[n - 1 - i], array[i]

print(*(array))