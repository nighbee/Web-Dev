# cigar_party
def cigar_party(cigars, is_weekend):
  if is_weekend:
    return cigars >= 40
  return 40 <= cigars <= 60

# caught_speeding
def caught_speeding(speed, is_birthday):
  extra = 5 if is_birthday else 0
  if speed <= 60 + extra:
    return 0
  elif speed <= 80 + extra:
    return 1
  return 2

# love6
def love6(a, b):
  return a == 6 or b == 6 or (a + b) == 6 or abs(a - b) == 6

# date_fashion
def date_fashion(you, date):
  if you <= 2 or date <= 2:
    return 0
  if you >= 8 or date >= 8:
    return 2
  return 1

# sorta_sum
def sorta_sum(a, b):
  total = a + b
  if 10 <= total <= 19:
    return 20
  return total

# in1to10
def in1to10(n, outside_mode):
  if outside_mode:
    return n <= 1 or n >= 10
  return 1 <= n <= 10

# squirrel_play
def squirrel_play(temp, is_summer):
  upper = 100 if is_summer else 90
  return 60 <= temp <= upper

# alarm_clock
def alarm_clock(day, vacation):
  is_weekend = (day == 0 or day == 6)
  if vacation:
    return "off" if is_weekend else "10:00"
  return "10:00" if is_weekend else "7:00"

# near_ten
def near_ten(num):
  remainder = num % 10
  return remainder <= 2 or remainder >= 8