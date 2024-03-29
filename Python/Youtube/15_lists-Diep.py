# There are four collection data types in the Python programming language:
#    + List is a collection which is ordered and changeable. Allows duplicate members.
#    + Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
#    + Set is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.
#    + Dictionary is a collection which is ordered** and changeable. No duplicate members.
# *Set items are unchangeable, but you can remove and/or add items whenever you like.
# **As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.

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
