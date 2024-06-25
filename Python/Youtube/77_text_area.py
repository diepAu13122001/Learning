from tkinter import *

window = Tk()

window.config(background="light yellow")


def printText():
    # 1.0: beginning of string
    print(text.get("1.0", END))


text = Text(
    window,
    background="light yellow",
    font=("Ink Free", 25),
    width=10,  # how many characters
    height=5,
    padx=10,
    pady=10,
)
text.pack()

button = Button(window, text="Submit", command=printText)
button.pack()

window.mainloop()
