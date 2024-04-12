# initialize list
arr = [5, 1, 8, 92, 7, 30]

# get even numbers
print('Even numbers: ', end='')
for el in arr:
  if el % 2 == 0:
    print(el, end=' ')