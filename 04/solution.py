#! /usr/local/bin/python3
import re

input = '248345-746315'

min = 248345
max = 746315

# Six digit number
# Value is within range
# At least two adjacent digits are the same
# Going L-R the digits never decrease, they either increase or stay the same

# Valid inputs include:
# 111111

# Invalid inputs include:
# 223450 (decreasing)
# 123789 (no double digits)

pwords = 0

for i in range(min, max+1):
  string = str(i)
  if re.search(r"(.)\1", string): # two adjacent characters
    str_list = list(string)
    str_list.sort()
    sorted = ''.join(str_list)
    if sorted == string:
      pwords += 1

print(pwords)

# part 2:
# the adjacent matching digits are not part of a larger group of matching digits
# however, other matching digits can exist

# Valid inputs include:
# 112233 (never decreases; all repeated digits are 2 digits long)
# 111122 (even though 1 is repeated more than twice, it contains a double 22)

# Invalid inputs include:
# 123444 (repeated 44 is part of a larger group, 444)
