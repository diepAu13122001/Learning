# Higher order function = a function that either:
#                         1. accepts a function as an argument
#                         or
#                         2. returns a function 
#                         (In Python, functions are also treated as objects)

# prove 1.
def loud(text):
    return text.upper()

def quiet(text):
    return text.lower()

def hello (func):
    print(func("Hello guys"))

hello(loud)
hello(quiet)

# prove 2.
def divisor(x): # as an object -> can add function inside
    def dividend(y):
        return y/x
    return dividend

divide = divisor(2)
print(divide(10)) # attention about how to set y 
