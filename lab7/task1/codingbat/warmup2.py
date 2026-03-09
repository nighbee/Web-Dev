string_times

def string_times(str, n):
  return str * n

string_splosion

def string_splosion(str):
  result = ""
  for i in range(len(str)):
    result += str[:i+1]
  return result

array_front9

def array_front9(nums):
  end = len(nums)
  if end > 4:
    end = 4
    
  for i in range(end):
    if nums[i] == 9:
      return True
  return False

front_times

def front_times(str, n):
  front_len = 3
  if front_len > len(str):
    front_len = len(str)
  front = str[:front_len]
  
  return front * n

last2

def last2(str):
  if len(str) < 2:
    return 0
  
  last2 = str[len(str)-2:]
  count = 0
  
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      count += 1
  return count

array123

def array123(nums):
  for i in range(len(nums)-2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False

string_bits

def string_bits(str):
  result = ""
  for i in range(0, len(str), 2):
    result += str[i]
  return result

array_count9


def array_count9(nums):
  count = 0
  for num in nums:
    if num == 9:
      count += 1
  return count

string_match

def string_match(a, b):
  shorter = min(len(a), len(b))
  count = 0
  
  for i in range(shorter - 1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
      count += 1
  return count