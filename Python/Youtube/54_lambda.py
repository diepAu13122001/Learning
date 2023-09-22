# lambda function = function written 1 line using lambda keyword
#                   accepts any number of arguments, but only has 1 expression
#                   (think of ot as a shortcut)
#                   (useful if needed for a short period of time, throw-away)

# lambda parameters:expression


def double(x):
    return x * 2


print(double(12))

double_lambda = lambda x: x * 2
print(double_lambda(15))

# with multi params
multiply = lambda x, y: x * y
add = lambda x, y, z: x + y + z
full_name = lambda first_name, last_name: first_name + " " + last_name
age_check = lambda age: "Adult" if age >= 18 else "Child"
