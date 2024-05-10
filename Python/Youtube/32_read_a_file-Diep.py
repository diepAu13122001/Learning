try:
    with open('C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\test.txt') as file:
        print(file.read())
except FileNotFoundError:
    print("That file was not found:(")
    
file.close()
print(file.closed)