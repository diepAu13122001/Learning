import os
import shutil

path = 'D:\\Learning\\Python\\materials\\test.txt'
try:
    os.remove(path)
except FileNotFoundError:
    print("That file was not found")
else:
    print(path + " was deleted")


path_dir = 'D:\\Learning\\Python\\materials'
try:
    os.rmdir(path_dir)
except FileNotFoundError:
    print("That file was not found")
except PermissionError:
    print("You do not have permission to delete that")
except OSError:
    print("You cannot delete that using that function")
    shutil.rmtree(path_dir) # delete folder has file
    print("folder was deleted, using shutil.rmtree")
else:
    print(path_dir + " was deleted")