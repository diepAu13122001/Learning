# copyfile() = copies contents of a file
# copy() = copyfile() + permission mode + destination can be a directory
# copy2() = copy() + copies metadata (file's creation and modification times)

import shutil

shutil.copyfile('D:\\Learning\\Python\\materials\\test.txt', 'D:\\Learning\\Python\\materials\\test_copyfile.txt') # scr, dst
shutil.copy('D:\\Learning\\Python\\materials\\test.txt', 'D:\\Learning\\Python\\materials\\test_copy.txt') # scr, dst
shutil.copy2('D:\\Learning\\Python\\materials\\test.txt', 'D:\\Learning\\Python\\materials\\test_copy2.txt') # scr, dst