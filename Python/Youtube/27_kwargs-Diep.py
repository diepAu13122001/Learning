# **kwargs = parameter that will pack all arguments into a dictionary
#           useful so that a function can accept a varying amount of keyword arguments
def hello(**kwargs):
    print("hello " + kwargs['first'] + " " + kwargs['last'])
    print("Hello", end=" ")
    for key, value in kwargs.items():
        print(value, end=" ")


hello(title="Ms.",first="Diep", middle="Ngoc", last="Au")
