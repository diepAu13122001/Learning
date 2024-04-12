# cau 5: tim so 4 chu so + co tong la 9
# def find_lucky_numbers():
#     lucky_numbers = []
#     for num in range(1000, 10000):
#         digits_sum = sum(int(digit) for digit in str(num))
#         if digits_sum == 9:
#             lucky_numbers.append(num)
#     return lucky_numbers


# lucky_numbers_list = find_lucky_numbers()
# # lay het danh sach
# # for i, num in enumerate(lucky_numbers_list, start=1):
# #     print(f"{i}. {num}")
# # random mot so phan tu trong danh sach
# import random

# #weight and cum_weight la tan suat xuat hien cua cac phan tu
# for num in random.choices(lucky_numbers_list, k=4):
#     print(num)

# cau 7: ve hinh soan oc
import turtle
for r in range(1, 1000, 5):
    turtle.circle(radius=r, extent=r)

turtle.mainloop()