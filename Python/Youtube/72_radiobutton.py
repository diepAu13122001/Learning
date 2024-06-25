from tkinter import *

window = Tk()

from PIL import Image, ImageTk
import os
# photo-------------------------------------------
# get the full path of the photo file
cur_dir = os.path.dirname(__file__)
icon_url = os.path.join(cur_dir, "icon.png")  # call full url of this icon
# convert image => format tk can use
icon = PhotoImage(file=icon_url)
# change size image ***
img = Image.open(icon_url)
img = img.resize((20, 20))
photoImg = ImageTk.PhotoImage(img)  # convert image => photo tkinter

# radio button --------------------------------------------------------
food_list = ["a", "b", "c"]


def chosen():
    print("You ordered", food_list[x.get()])


x = IntVar()

for i in range(len(food_list)):
    radio_btn = Radiobutton(
        window,
        text=food_list[i],
        variable=x,  # group the radio buttons if they shared the same variable
        value=i, # must have same type with "x"
        padx=25,
        pady=10,
        font=("Impact", 20),
        image=photoImg,
        compound="right",
        indicatoron=0,  # xoa o tron tich chon => chuyen sang button
        width=90,  # set width off radio button
        command=chosen,
    )
    radio_btn.pack(anchor=W)  # hien thi ben trai cua window (west)

window.mainloop()  # place window on computer screen, listen for events
