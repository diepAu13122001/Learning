# str.format() = optional method that gives users more control when displaying output

animal = "cow"
item = "moon"

print("The " + animal + " jumped over the " + item)
print("The {} jumped over the {}".format("cow", item))
print("The {1} jumped over the {0}".format(item, animal)) # positional argument
print("The {animal1} jumped over the {animal1}".format(item1="moon", animal1="cow")) # keyword argument

text = "the {} jumped over the {}"
print(text.format(animal, item))

# -------------- String -------------------
name = "Diep"
print("Hello, my name is {}".format(name)) # Diep
print("Hello, my name is {:10}. Nice to meet you".format(name)) # Diep + "    "
print("Hello, my name is {:<10}. Nice to meet you".format(name)) # Diep + "    "
print("Hello, my name is {:>10}. Nice to meet you".format(name)) # "    " + Diep 
print("Hello, my name is {:^10}. Nice to meet you".format(name)) # "   " + Diep + "    "

# -------------- Number -------------------
number = 3.14159
num2 = 1000000
print("The number pi is {:.2f}".format(number)) # 3.14
print("The number pi is {:,}".format(num2)) # 1,000,000
print("The number pi is {:b}".format(num2)) # 11110100001001000000 bit 
print("The number pi is {:o}".format(num2)) # 3641100 he 10
print("The number pi is {:X}".format(num2)) # F4240 he 16
print("The number pi is {:E}".format(num2)) # 1.000000E+06



