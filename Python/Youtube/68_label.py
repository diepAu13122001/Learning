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

label.place(x=100, y=100) # change place for label
label.pack()  # add in window (at top + center + background white @.@)

window.mainloop()  # place window on computer screen, listen for events


