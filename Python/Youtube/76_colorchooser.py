from tkinter import *
from tkinter import colorchooser

window = Tk()

window.geometry("420x420")


def changeBackground():
    color = colorchooser.askcolor()
    print(color)  # a tuple with 2 items: rgb, hex code
    colorHex = color[1]
    window.config(background=colorHex)


button = Button(window, text="Choose background", command=changeBackground)

button.pack()


window.mainloop()
