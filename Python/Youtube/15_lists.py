# list = used to store multiple items in a single variable

food = ["ga nuong", "banh chung", "nuoc mia"]

food[0] = "bun bo"

print(food) # print all list
print(food[0]) # print specific items

for x in food:
    print(x)

# ----------- functions of list ----------
food.append("kem chuoi")
food.remove("banh chung")
food.pop() # remove last item
food.insert(3, "banh canh cua")
food.sort()
food.clear()
print(food)