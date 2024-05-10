import os
import shutil

path = "C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\test2.txt"
try:
    os.remove(path)
except FileNotFoundError:
    print("That file was not found")
else:
    print(path + " was deleted")

# xoa folder
path_dir = "C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\test2.txt"
try:
    os.rmdir(path_dir)
except FileNotFoundError:
    print("That file was not found")
except PermissionError:
    print("You do not have permission to delete that")
except OSError:
    print("You cannot delete that using that function")
    shutil.rmtree(path_dir)  # delete folder has file
    print("folder was deleted, using shutil.rmtree")
else:
    print(path_dir + " was deleted")
