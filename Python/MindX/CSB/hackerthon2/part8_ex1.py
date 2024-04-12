# initialize list
scores = [78, 56, 67]

# get user input
print('Input new score: ', end='')
scores.append(int(input()))

# sort list - selection sort
for i in range(len(scores)-1):
  max_pos = i   # find i-th max element
  for j in range(i+1, len(scores)):
    if scores[j] > scores[max_pos]:
      max_pos = j
  scores[i], scores[max_pos] = scores[max_pos], scores[i]  # swap to current position

# print list
print('High scores:')
for i, score in enumerate(scores):
  print(f'{i+1}. {score}')