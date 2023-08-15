import time
# for loop = a statement that will execute it's block of code
#            a limited amount of times

# while loop (unlimited) # for loop (limited)

#----------------- number -------------
#range(<start>, <end>, <step>)
for i in range(10, 20+1, 2):
    print(i)

#---------------- string ---------------
for i in "Diep Au": 
    print(i)

# -------------- count time -------------
for seconds in range(10, 0, -1):
    print(seconds)
    time.sleep(1) # wait 1 sec 
print("Happy new year!")