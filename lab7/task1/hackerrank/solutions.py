# Hello world 
if __name__ == '__main__':
    print("Hello, World! ")


# if else  https://www.hackerrank.com/challenges/py-if-else/problem?isFullScreen=true

n = int(input().strip())

if n % 2 != 0:
    print("Weird")
else:
    if 2 <= n <= 5:
        print("Not Weird")
    elif 6 <= n <= 20:
        print("Weird")
    else:
        print("Not Weird")
        
# functions: https://www.hackerrank.com/challenges/write-a-function/problem?isFullScreen=true


def is_leap(year):
    leap = False
    
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                leap = True
            else:
                leap = False
        else:
            leap = True
    else:
        leap = False
    
    return leap

year = int(input())
print(is_leap(year))


# nested list: https://www.hackerrank.com/challenges/nested-list/problem?isFullScreen=true

if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    scores = sorted(list(set([student[1] for student in students])))
    
    second_lowest_score = scores[1]
    
    result_names = [student[0] for student in students if student[1] == second_lowest_score]
    
    for name in sorted(result_names):
        print(name)
        
# mutations: https://www.hackerrank.com/challenges/python-mutations/problem?isFullScreen=true

def mutate_string(string, position, character):
    # Используем метод срезов для создания новой строки
    return string[:position] + character + string[position + 1:]

if __name__ == '__main__':
    s = input()
    p, c = input().split()
    s_new = mutate_string(s, int(p), c)
    print(s_new)

# text alignment: https://www.hackerrank.com/challenges/text-alignment/problem?isFullScreen=true

thickness = int(input()) # This must be an odd number
c = 'H'


for i in range(thickness):
    print((c*i).rjust(thickness-1) + c + (c*i).ljust(thickness-1))
for i in range(thickness+1):
    print((c*thickness).center(thickness*2) + (c*thickness).center(thickness*6))

for i in range((thickness+1)//2):
    print((c*thickness*5).center(thickness*6))    

for i in range(thickness+1):
    print((c*thickness).center(thickness*2) + (c*thickness).center(thickness*6))    

for i in range(thickness):
    print(((c*(thickness-i-1)).rjust(thickness) + c + (c*(thickness-i-1)).ljust(thickness)).rjust(thickness*6))
    

#  find angle: https://www.hackerrank.com/challenges/find-angle/problem?isFullScreen=true

import math

ab = int(input())
bc = int(input())

angle_rad = math.atan(ab / bc)
angle_deg = math.degrees(angle_rad)

print(f"{round(angle_deg)}{chr(176)}")

# intro to sets: https://www.hackerrank.com/challenges/py-introduction-to-sets/problem?isFullScreen=true

def average(array):
    distinct_heights = set(array)
    total_sum = sum(distinct_heights)
    number_of_elements = len(distinct_heights)
    return total_sum / number_of_elements

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)
    
    
# https://www.hackerrank.com/challenges/maximize-it/problem?isFullScreen=true
from itertools import product

k, m = map(int, input().split())
lists = []

for _ in range(k):
    data = list(map(int, input().split()))[1:]
    lists.append(data)

combinations = product(*lists)

max_value = 0

for combo in combinations:
    current_sum = sum(x**2 for x in combo) % m
    if current_sum > max_value:
        max_value = current_sum

print(max_value)

# validating email addresses: https://www.hackerrank.com/challenges/validate-list-of-email-address-with-filter/problem?isFullScreen=true

import re

def fun(s):
    pattern = r'^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{1,3}$'
    return re.match(pattern, s) is not None

def filter_mail(emails):
    return list(filter(fun, emails))

if __name__ == '__main__':
    n = int(input())
    emails = []
    for _ in range(n):
        emails.append(input())

filtered_emails = filter_mail(emails)
filtered_emails.sort()
print(filtered_emails)