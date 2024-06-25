from tkinter import *
from tkinter import messagebox

window = Tk()

# change icon by "icon" property: info, warning, error


def show_msg():
    # have a "!" icon
    messagebox.showinfo(
        title="This is a title tag", message="This is a message", icon="info"
    )
    # have a warning icon
    # messagebox.showwarning(title="This is a title tag", message="This is a message")
    # # have an "X" icon
    # messagebox.showerror(title="This is a title tag", message="This is a message")
    # # have a "?" icon
    # answer = messagebox.askokcancel(title="Question", message="Do you want to ...?")
    # if answer:
    #     print("You clicked OK")
    # else:
    #     print("Why did you click cancel?")
    # # have a "!" with 2 buttons
    # answer2 = messagebox.askretrycancel(
    #     title="Question", message="Do you want to retry ...?"
    # )
    # if answer2:
    #     print("You retried sth")
    # else:
    #     print("You canceled sth")

    # # have a "?" icon with yes - no buttons => return True/ false
    # answer3 = messagebox.askyesno(title="Question", message="Do you want to ...?")
    # if answer3:
    #     print("You said yes for sth")
    # else:
    #     print("You said no for sth")

    # # have a "?" icon with yes - no buttons => return string yes/no
    # print(messagebox.askquestion(title="Question", message="Do you want to ...?"))

    # # have a "?" icon with yes - no + cancel buttons => return boolean true/false/none
    # print(messagebox.askyesnocancel(title="Question", message="Do you want to ...?"))


button = Button(window, text="Click me!", command=show_msg)
button.pack()

window.mainloop()
