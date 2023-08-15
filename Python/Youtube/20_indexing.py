# index operator [] = gives access to a sequence's element (str, list, tuples)

#------------- string -------------
name = "diep Au"
if(name[0].islower()):
    name = name.capitalize()
print(name)
# like string slicing
first_name = name[:4].upper() 
last_name = name[5:].lower()
last_character = name[-2]
print(first_name)
print(last_name)
print(last_character)

# ------------ list/ tuple -----------------
# same functions with string :)

