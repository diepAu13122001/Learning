# initialize lists
names = ['BĐ', 'BTL', 'CG', 'ĐĐ', 'HBT']
areas = [9.224, 43.35, 12.04, 9.96, 10.09]
pops = [247100, 333300, 266800, 420900, 318000]

# generate population density list
dens = []
for i in range(len(areas)):
  dens.append(pops[i]/areas[i])

# print result
print('Popluation density of:')
for i in range(len(areas)):
  print(f'- {names[i]}: {dens[i]}')
