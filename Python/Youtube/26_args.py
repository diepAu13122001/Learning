# args = parameter that will pack all arguments into a tuple
#        useful so that function can accept a varying amount of arguments

def add(*stuff): # stuff can have many different type items
    sum = 0
    stuff = list(stuff) # convert tuple to list
    stuff[0] = 0
    for i in stuff:
        sum += i
    return sum

print(add(1,2,3,4,5,6,7,8,9))