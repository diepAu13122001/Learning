# set = collection which is unordered, not indexed. No duplicate values

utensils = {5,15,23,263,14}
dishes = {3,12,69, 5}

print(utensils.difference(dishes)) # get different list of list dishes
print(utensils.intersection(dishes)) # get list of same items
utensils.add("napkin")
utensils.remove(15)
utensils.clear()
utensils.update(dishes)

dinner_table = utensils.union(dishes) # mix 2 in 1 set

for x in dinner_table:
    print(x)






