# initialize list
colors = ['blue', 'teal', 'green']

# print color list
print('Color list:')
for color in colors[:-1]:
  print(color, end=', ')
print(colors[-1])

# get user input
print('Input a new color: ', end='')
color = input()
colors.append(color)

# print updated color list
print('New color list:')
for color in colors[:-1]:
  print(color, end=', ')
print(colors[-1])