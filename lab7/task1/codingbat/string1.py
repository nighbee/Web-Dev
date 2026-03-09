# hello_name
def hello_name(name):
  return "Hello " + name + "!"

# make_out_word
def make_out_word(out, word):
  return out[:2] + word + out[2:]

# first_half
def first_half(str):
  return str[:len(str)//2]

# non_start
def non_start(a, b):
  return a[1:] + b[1:]

# make_abba
def make_abba(a, b):
  return a + b + b + a

# extra_end
def extra_end(str):
  return str[-2:] * 3

# without_end
def without_end(str):
  return str[1:-1]

# left2
def left2(str):
  return str[2:] + str[:2]

# make_tags
def make_tags(tag, word):
  return "<" + tag + ">" + word + "</" + tag + ">"

# first_two
def first_two(str):
  return str[:2]

# combo_string
def combo_string(a, b):
  if len(a) < len(b):
    return a + b + a
  return b + a + b