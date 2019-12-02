#! /usr/local/bin/python3
from math import floor

def calc_fuel(input):
  return floor(int(input) / 3) - 2

# test input
input = 100756
print(calc_fuel(input))

with open('input.txt', 'r') as input:
  inputs = input.read().strip().split('\n')
  # inputs = [14, 1969, 100756]

  # part 1
  total = 0

  for item in inputs:
    total += calc_fuel(item)

  print(total)



  # part 2
  totals = []

  for item in inputs:
    running_total = calc_fuel(item)
    totals.append(running_total)

    while running_total > 0:
      current_fuel = calc_fuel(running_total)
      running_total = current_fuel
      if current_fuel > 0:
        totals.append(current_fuel)
      else:
        running_total = 0

  print(sum(totals))
