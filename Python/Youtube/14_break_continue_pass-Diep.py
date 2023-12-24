# Loop control statements = change a loops execution from its normal sequence

print("---------------------- break ---------------------")
# break = used to terminate the loop entirely
while True:
    name = input("Enter your name: ")
    if (name != ""):
        break

print("\n"+ "------------------ countinue ---------------------")
# countinue = skips to the next iteration of the loop
phone_number = "123-456-789"
for i in phone_number:
    if(i == "-"):
        continue
    print(i, end="")

print("\n"+ "---------------------- pass ---------------------")
# pass      = does nothing, acts as a placeholder
# !!! countinue -> pass/ pass !-> countinue
for i in range(1,21):
    if i == 13:
        pass
    else:
        print(i, end=" ")

for i in range(1,21):
    if i == 13:
        continue
    print(i, end=" ")