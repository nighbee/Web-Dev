# count_evens
def count_evens(nums):
  count = 0
  for n in nums:
    if n % 2 == 0:
      count += 1
  return count

# big_diff
def big_diff(nums):
  return max(nums) - min(nums)

# centered_average
def centered_average(nums):
  sum_vals = sum(nums) - max(nums) - min(nums)
  return sum_vals // (len(nums) - 2)

# sum13
def sum13(nums):
  total = 0
  i = 0
  while i < len(nums):
    if nums[i] == 13:
      i += 2
      continue
    total += nums[i]
    i += 1
  return total

# sum67
def sum67(nums):
  total = 0
  ignore = False
  for n in nums:
    if n == 6:
      ignore = True
    if not ignore:
      total += n
    if ignore and n == 7:
      ignore = False
  return total

# has22
def has22(nums):
  for i in range(len(nums) - 1):
    if nums[i] == 2 and nums[i+1] == 2:
      return True
  return False