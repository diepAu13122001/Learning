# map() = applies a function to each item in an iterable (list, tuple, ...)
# map(function, iterable)
store_dollars = [("apple", 1), ("jacket", 50), ("paints", 40), ("skirt", 80)]
to_euros = lambda data: (data[0], data[1] * 0.82)
# tao list moi sau khi map
store_euros = list(map(to_euros, store_dollars))
for i in store_euros:
    print(i)

students = (
    ("Nga", "F", 12),
    ("Huong", "B", 15),
    ("Tran", "D", 13),
    ("Tan", "D", 14),
    ("Duong", "F", 11),
    ("Minh", "A", 16),
)

# vua sort + map 
next_ages = sorted(
    tuple(map(lambda data: (data[0], data[1], data[2] + 1), students)),
    key=(lambda age: age[2])
)
for i in next_ages:
    print(i)
