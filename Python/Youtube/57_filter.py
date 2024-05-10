# filter() = creates a collection of elements from an iterable for which a func returns
# filter(function, iterable)
students = [
    ("A", 12),
    ("E", 15),
    ("B", 13),
    ("D", 14),
    ("C", 11),
    ("F", 16),
]

filter_students = lambda age: age[1] >= 14
pass_list = list(filter(filter_students, students))
for i in pass_list:
    print(i)