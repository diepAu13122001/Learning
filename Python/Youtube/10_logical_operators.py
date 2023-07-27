# logical operators (and, or, not)
temp = int(input("What is the temperature outside?: "))

if not (temp >= 0 and temp <= 30):
    print("The temperature is bad today!")
    print("Stay inside!")
elif not (temp < 0 or temp > 30):
    print("the temperature is good today!")
    print("Go outside!")