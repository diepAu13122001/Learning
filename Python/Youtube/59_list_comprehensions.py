# list comprehension =  a way to create a new list with less syntax
# can mimic certain lambda functions, easier to read
# list = [expression for item in iterable]
# list = [expression for item in iterable if conditional]
# list = [expression (if/else) for item in iterable]

# normal way
my_map = []
for i in range(1, 11):
    col = []
    for j in range(5):
        col.append("-")
    my_map.append(col)
print(my_map)

# fast way
map_2 = [["-"] * 5 for i in range(1, 11)]
print(map_2)


# filter
students = [50, 40, 70, 60, 80, 100, 0]
# normal way
passed_students = list(filter(lambda sc: sc >=60, students))
print(passed_students)
# fast way
passed_students_2 = [item for item in students if item >= 60]
passed_students_2 = [item if item >= 60 else "Failed" for item in students]
print(passed_students_2)
