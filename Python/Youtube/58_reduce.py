# reduce() = apply a function to an iterable and reduce it to a single cumulative value.
#            performs function on first two elements and repeat process until 1 value remains
# reduce(function, iterable)
import functools

letters = ["H", "E", "L", "L", "O"]
word = functools.reduce(lambda x, y: x + y, letters)
print(word)

# number list ----------------
import operator
my_list = [1]
n = 5
sum = lambda x, y: x + y
add_item = lambda: my_list.append(functools.reduce(sum, my_list))
# add_item = lambda: my_list.append(functools.reduce(operator.add, my_list)) # co the dung them operator
for i in range(n):
    add_item()
print(my_list)

# Tim so lon nhat trong danh sach 
print("The maximum element of the list is : ", end="") 
print(functools.reduce(lambda a, b: a if a > b else b, my_list)) 

# Factorial ------------------------------------------
lis = [5,4,3,2,1]
result = functools.reduce(operator.mul, lis)
print(result)