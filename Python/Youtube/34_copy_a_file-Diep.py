# copyfile() = copies contents of a file
# copy() = copyfile() + kèm quyền truy cập
# copy2() = copy() + copies metadata (copy cả thời gian tạo file + thông tin sửa đổi, ...)

import shutil

scr = "C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\test.txt"
dst = "C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\"

shutil.copyfile(scr, dst + "test_copyfile.txt")  # scr, dst
shutil.copy(scr, dst + "test_copy.txt")  # scr, dst
shutil.copy2(scr, dst + "test_copy2.txt")  # scr, dst
