# get user inputs
print('Input the list of numbers.')
print('Enter 0 to finish')

s = 0
while True:
  num = int(input())
  if num == 0:  # finish input
    break
  s += num  # calculate sum | no need to use a list

# print result
print('Sum of numbers in list:', s)