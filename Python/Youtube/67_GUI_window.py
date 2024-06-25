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
img = img.resize((20, 20))
photoImg = ImageTk.PhotoImage(img)  # convert image => photo tkinter

window.iconphoto(True, icon)  # change icon :)

window.config(background="#e0bbe4")  # change background by html color code

window.mainloop()  # place window on computer screen, listen for events
