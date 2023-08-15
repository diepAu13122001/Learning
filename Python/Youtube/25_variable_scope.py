# scope = The region that a variable is recognized
#         A variable is only available from inside the region it is created
#         A global and locally scoped versions of a variable can be created
# Python: LEGB -> Local, Enclosing, Global, Built-in (sort by level up of scope)

name = "Haha"  # global scope


def display_name():
    name = "Diep"  # local scope
    print(name)


display_name()  # print local var


def display_name_2():
   # name = "Diep" # local scope
    print(name)  # enclosing


display_name_2()  # print global var

print(name)  # print global var
