# sleep 
def sleep_in(weekday, vacation):
    if not weekday or vacation:
        return True
    else:
        return False
# diff21 
def diff21(n):
    if n <= 21:
        return 21 - n
    else:
        return (n - 21) * 2
    
# near_hundred

def near_hundred(n):
    return (abs(100 - n) <= 10) or (abs(200 - n) <= 10)

#missing char 
def missing_char(str, n):
    return str[:n] + str[n+1:]

# monkey trouble 
def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

# parrot 
def parrot_trouble(talking, hour):
    return talking and (hour < 7 or hour > 20)

#pos neg 
def pos_neg(a, b, negative):
    if negative:
        return (a < 0 and b < 0)
    else:
        return (a < 0 and b > 0) or (a > 0 and b < 0)

# front back 
def front_back(str):
    if len(str) <= 1:
        return str
    
    mid = str[1:-1]
    
    return str[-1] + mid + str[0]

# sum doubled:
def sum_double(a, b):
    if a == b:
        return (a + b) * 2
    else:
        return a + b
    
    
# makes 10 
def makes10(a, b):
    return (a == 10 or b == 10 or (a + b) == 10)

# not string 
def not_string(str):
    if len(str) >= 3 and str[:3] == "not":
        return str
    return "not " + str

#front 3 
def front3(str):
    if len(str) < 3:
        front = str
    else:
        front = str[:3]
    return front * 3
    