name = input("What is your name?: ")  # always is the string type
age = int(input("How old are you?: "))  # need to cast
height = float(input("How tall are you?: "))
age = age + 1
height = height - 0.5

print("Your name is: " + name)
print("Your age is: " + str(age))
print("Your heigh is: " + str(height) + "cm")
