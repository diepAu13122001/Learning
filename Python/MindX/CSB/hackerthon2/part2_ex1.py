# initialize list
colors = ['blue', 'teal', 'green']

# print color list
print('Color list:')
for color in colors[:-1]:
  print(color, end=', ')
print(colors[-1])

# get user input
print('Input position: ', end='')
pos = int(input())

# print result
print(f'Color at position {pos}: {colors[pos-1]}')