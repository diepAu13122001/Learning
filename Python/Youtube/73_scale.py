from tkinter import *

window = Tk()

# scale ------------------------------------------------------------
# slider (volume scrolling bar)
def submit():
    print("Volume now is: ", scale.get())

# return an integer value
scale = Scale(
    window,
    from_=100,
    to=0,
    length=600,
    orient=VERTICAL,  # huong dat cua scale
    font=("Consolas", 20),
    tickinterval=10,  # hien thi tung muc do
    showvalue=0,  # hide current value
    resolution=10,  # step - buoc nhay
    troughcolor="#69EAFF",
    fg="#FF1C00",
    bg="black",
)
# set the default of value when start the window
scale.set(((scale["from"] - scale["to"]) / 2) + scale["to"])  # middle of scale
scale.pack()

submit_button = Button(window, text="Submit", command=submit)
submit_button.pack()

window.mainloop()  # place window on computer screen, listen for events

