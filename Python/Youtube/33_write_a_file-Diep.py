text = "Hello World! \nThis is some text\nHave a good one."
text2 = "Have a nice day!\nSee ya!!!"

# # 'r' Đọc file (read) Báo lỗi nếu file không tồn tại
with open('C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\test.txt', 'r') as file:
    file.read()

# 'x' Tạo file mới (exclusive create) Báo lỗi nếu file đã tồn tại
with open('C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\test2.txt', 'x') as file:
    file.write(text)

# 'w' Xóa nội dung và ghi đè nội dung mới (write) Tạo file mới nếu file không tồn tại
with open('C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\test.txt', 'w') as file:
    file.write(text)

# 'a' Thêm nội dung (append) Tạo file mới nếu file không tồn tại
with open('C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Python\\Youtube\\materials\\test.txt', 'a') as file:
    file.write(text2)