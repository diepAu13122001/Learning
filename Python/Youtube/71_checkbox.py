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

# checkbox -------------------------------------------------------------
def display():
    if x.get() == 1:
        print("You agreed")
    else:
        print("You didn't agree")

x = IntVar()  # return a integer value, StrVar/ BooleanVar

check_btn = Checkbutton(
    window,
    text="I agree to something",
    variable=x,
    onvalue=1,
    offvalue=0,
    command=display,
    font=("Arial", 20),
    fg="#00ff00",
    bg="black",
    activeforeground="#00ff00",
    activebackground="black",
    padx=25,
    pady=10,
    image=icon,
    compound="right",
)

check_btn.pack()

window.mainloop()  # place window on computer screen, listen for events
