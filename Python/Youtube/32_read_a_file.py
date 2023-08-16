try:
    with open('D:\\Learning\\Python\\Youtube\\materials\\test.txt') as file:
        print(file.read())
except FileNotFoundError:
    print("That file was not found:(")
    
print(file.closed)