# initialize list
arr = [5, 1, 8, 92, -1, 30]

# get user input
print('Input a number: ', end='')
num = int(input())

# find the number
pos = None
for i, el in enumerate(arr):
  if el == num:  # if current element == number to find
    pos = i      # mark the position
    break        # exit the loop

# print result
if pos == None:
  print('Number not found')
else:
  print('Number found at position', pos+1)