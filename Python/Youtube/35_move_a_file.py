import os

source_file = "D:\\Learning\\Python\\materials\\test.txt"
destination_file = "D:\\Learning\\Python\\Youtube\\test.txt"

try:
    if os.path.exists(destination_file):
        print("There is already a file there")
    else:
        os.replace(source_file, destination_file)
        print(source_file + " was moved")
except FileNotFoundError:
    print(source_file+" was not found")


source_dir = "D:\\Learning\\Python\\materials"
destination_dir = "D:\\Learning\\materials"

try:
    if os.path.exists(destination_dir):
        print("There is already a file there")
    else:
        os.replace(source_dir, destination_dir)
        print(source_dir + " was moved")
except FileNotFoundError:
    print(source_dir+" was not found")
