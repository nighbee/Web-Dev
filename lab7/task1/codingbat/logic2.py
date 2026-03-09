# make_bricks
def make_bricks(small, big, goal):
  if goal > big * 5 + small:
    return False
  if goal % 5 > small:
    return False
  return True

# no_teen_sum
def no_teen_sum(a, b, c):
  return fix_teen(a) + fix_teen(b) + fix_teen(c)

def fix_teen(n):
  if 13 <= n <= 19 and n != 15 and n != 16:
    return 0
  return n

# make_chocolate
def make_chocolate(small, big, goal):
  max_big = goal // 5
  if big >= max_big:
    needed_small = goal - (max_big * 5)
  else:
    needed_small = goal - (big * 5)
    
  if needed_small <= small:
    return needed_small
  return -1

# lone_sum
def lone_sum(a, b, c):
  sum = 0
  if a != b and a != c: sum += a
  if b != a and b != c: sum += b
  if c != a and c != b: sum += c
  return sum

# round_sum
def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)

def round10(num):
  if num % 10 >= 5:
    return num + (10 - num % 10)
  return num - (num % 10)

# lucky_sum
def lucky_sum(a, b, c):
  if a == 13: return 0
  if b == 13: return a
  if c == 13: return a + b
  return a + b + c

# close_far
def close_far(a, b, c):
  a_b_close = abs(a - b) <= 1
  a_c_close = abs(a - c) <= 1
  
  if a_b_close and abs(c - a) >= 2 and abs(c - b) >= 2:
    return True
  if a_c_close and abs(b - a) >= 2 and abs(b - c) >= 2:
    return True
  return False