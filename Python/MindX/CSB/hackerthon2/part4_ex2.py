# get user inputs
print('Input the list of numbers.')
print('Enter 0 to finish')

arr = []  # initilize list
while True:
  num = int(input())
  if num == 0:  # finish input
    break
  if num % 2 == 0:   # if even
    arr.append(num)  # add number to list

# print result
print('Even numbers in list: ', end='')
for el in arr:
  print(el, end=' ')