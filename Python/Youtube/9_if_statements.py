age = int(input("How old are you?: "))
# ----------- start the block --------------
if (age == 100):
    print("You are a century old!")
elif age >= 18:
    print("You are an Adult!") # need to tab
# elif age == 100: 
#     print("You are a century old!") # can't check because if block gets the above if and skip all below code if condition return true
elif age < 0: 
    print("You haven't been yet!")
else:
    print("You are a child!")
