# Tkinter library
from tkinter import *

# pip install pillow
from PIL import Image, ImageTk
import os

# widgets: GUI elements: button, textbox, label, image, ...
# windows: serves as a container to hold or contain these widgets

window = Tk()  # instantiate (khoi tao) and instance of a window

# custom window ---------------------------------
# geometry: hinh hoc
window.geometry("800x800")  # change size
window.title("My first GUI window")  # change title of the window

# photo-------------------------------------------
# get the full path of the photo file
cur_dir = os.path.dirname(__file__)
icon_url = os.path.join(cur_dir, "icon.png")  # call full url of this icon
# convert image => format tk can use
icon = PhotoImage(file=icon_url)
# change size image ***
img = Image.open(icon_url)
img = img.resize((40, 40))
photoImg = ImageTk.PhotoImage(img)  # convert image => photo tkinter

window.iconphoto(True, icon)  # change icon :)

window.config(background="#e0bbe4")  # change background by html color code

# Label -----------------------------------------
# create a label
# font = tuple with: font name, size, custom (bold, italic)
# foreground = color of label
# relief = style of border for label (raised/ sunken)
# bd = how much thick of this border
# image = add image on text (font of)
# compound = where place image stays? (top/ left/ right)
label = Label(
    window,
    text="No pain no gain!",
    font=("Arial", 40, "bold"),
    foreground="#0f0529",
    background="#e0bbe4",
    relief=RAISED,
    bd=15,
    padx=10,
    pady=20,
    image=icon,
    compound="bottom",
)

# label.place(x=100, y=100) # change place for label
label.pack()  # add in window (at top + center + background white @.@)

# entry box (input field) ---------------------------------
# show: change character when input by str (argument) - hidden text
entry = Entry(
    window, font=("Arial", 25), foreground="#0f0529", background="#7338a0", show="."
)

entry.insert(0, "Please add your password")

entry.pack()  # add in window


# button -------------------------------------------------
def submit():
    username = entry.get()  # lay du lieu vua nhap
    if not username == "":
        print("Hello", username)
        entry.config(state=DISABLED)  # khoa lai input field


def delete():
    entry.delete(0, END)  # xoa het phan vua nhap


def backspace():  # delete last character in str
    entry.delete(len(entry.get()) - 1, END)


# command: function when you click this button
# when click button => background  return white (original)
# => activebackground + activeforeground
# state: trang thai cua button (active + disable)
submit_btn = Button(
    window,
    text="Submit now!",
    command=submit,
    font=("Arial", 16),
    foreground="#0f0529",
    background="#7338a0",
    activeforeground="#0f0529",
    activebackground="#7338a0",
    state=ACTIVE,
    image=photoImg,
    compound=LEFT,
)

submit_btn.pack()  # add in window (top + center + have background

delete_btn = Button(
    window,
    text="Delete all!",
    command=delete,
    font=("Arial", 16),
    foreground="#0f0529",
    background="#7338a0",
    activeforeground="#0f0529",
    activebackground="#7338a0",
    state=ACTIVE,
    image=photoImg,
    compound=LEFT,
)

delete_btn.pack()  # add in window (top + center + have background

backspace_btn = Button(
    window,
    text="Backspace",
    command=backspace,
    font=("Arial", 16),
    foreground="#0f0529",
    background="#7338a0",
    activeforeground="#0f0529",
    activebackground="#7338a0",
    state=ACTIVE,
    image=photoImg,
    compound=LEFT,
)

backspace_btn.pack()  # add in window (top + center + have background

window.mainloop()  # place window on computer screen, listen for events
