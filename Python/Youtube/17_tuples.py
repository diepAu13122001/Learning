# tuple = collection which is ordered and unchangeable
#         used to group together related data
student = ("Diep", 23, "female")

print(student.count("Diep"))
print(student.index("female"))

for x in student:
    print(x)

if "Diep" in student:
    print("Diep is here")