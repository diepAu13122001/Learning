# exception = event detected during execution that interrupt the flow of a program
try:
    numerator = int(input("Enter the number to divide: "))
    denominator = int(input("Enter the number to divide by: "))
    result = numerator/denominator
except ZeroDivisionError as e:
    print(e)
    print("You can't divide by 0, bro!!!!")
except ValueError as e:
    print(e)
    print("Enter only number pleaseeee!!")
except Exception as e:
    print(e)
    print("Something went wrong :(")
else:
    print(result)
finally: # always do after check exception (whatever true or false)
    print("This will always execute")