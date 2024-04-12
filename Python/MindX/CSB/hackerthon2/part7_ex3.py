# initialize list
scores = [78, 56, 67]

# get user input
print('Input new score: ', end='')
scores.append(int(input()))

# print list
print('High scores:')
for i, score in enumerate(scores):
  print(f'{i+1}. {score}')