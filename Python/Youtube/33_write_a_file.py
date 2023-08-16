text = "Hello World! \nThis is some text\nHave a good one."
text2 = "Have a nice day!\nSee ya!!!"

# Overwritten file 
with open('D:\\Learning\\Python\\Youtube\\materials\\test.txt', 'w') as file:
    file.write(text)

# Append text in file
with open('D:\\Learning\\Python\\Youtube\\materials\\test.txt', 'a') as file:
    file.write(text2)