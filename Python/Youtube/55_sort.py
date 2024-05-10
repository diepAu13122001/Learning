# sort() method = used with lists
# sorted() function = used with iterables
students = (
    ("A", 12),
    ("E", 15),
    ("B", 13),
    ("D", 14),
    ("C", 11),
    ("F", 16),
)
students_name = ["A", "B", "C", "D", "E", "F"]
# students_name.sort() # sort theo A => Z
# students_name.sort(reverse=True) # Z => A

for i in students_name:
    print(i)

# vi tuple khong changeable duoc => phai tao bien moi
sorted_students = sorted(students)
for i in sorted_students:
    print(i)

students_2 = [
    ("Nga", "F", 12),
    ("Huong", "B", 15),
    ("Tran", "D", 13),
    ("Tan", "D", 14),
    ("Duong", "F", 11),
    ("Minh", "A", 16),
]

grade = lambda grades: grades[1]  # sap xep theo cot thu may trong tuple (1: cot diem)
students_2.sort(key=grade, reverse=True)
for i in students_2:
    print(i)

students_3 = (
    ("Nga", "F", 12),
    ("Huong", "B", 15),
    ("Tran", "D", 13),
    ("Tan", "D", 14),
    ("Duong", "F", 11),
    ("Minh", "A", 16),
)

age = lambda ages: ages[2]  # sap xep theo cot thu may trong tuple (2: tuoi)
sorted_students_3 = sorted(students_3, key=age, reverse=True)
print()
for i in sorted_students_3:
    print(i)
