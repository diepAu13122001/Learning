# initialize list
colors = ['blue', 'teal', 'green']

# print color list
print('Color list:')
for color in colors[:-1]:
  print(color, end=', ')
print(colors[-1])

# get user input
print('Item to delete: ', end='')
inp = input()

# print result
if inp[0] >= '0' and inp[0] <= '9':  # number
  colors.pop(int(inp)-1)  # remove by index
else:                                # color name
  colors.remove(inp)      # remove by value

# print updated color list
print('New color list:')
for color in colors[:-1]:
  print(color, end=', ')
print(colors[-1])