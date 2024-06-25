from tkinter import *

window = Tk()

# list box ---------------------------------------------------
food = ["a", "b", "c"]
list_box = Listbox(
    window,
    background="#f7ffde",
    font=("Constantia", 35),
    width=12,
    selectmode=MULTIPLE,  # chon nhieu option
)


# curseletion(): return the index of item you chose
def submit():
    for i in list_box.curselection():
        print("You chose:", i, list_box.get(i))


def addItem():
    if entry_box.get() != "":
        list_box.insert(list_box.size(), entry_box.get())
        list_box.config(height=list_box.size())


def deleteItem():
    #  cause after del => index change => cannot del multiple option => need to reverse list
    for i in reversed(list_box.curselection()):
        list_box.delete(i)
    list_box.config(height=list_box.size())


# add items in list
for i in range(len(food)):
    list_box.insert(i, food[i])

# change style of list box
list_box.config(height=list_box.size())

list_box.pack()

entry_box = Entry(window)
entry_box.pack()

add_btn = Button(window, command=addItem, text="Add Item")
add_btn.pack()

submit_btn = Button(window, command=submit, text="Submit")
submit_btn.pack()

delete_btn = Button(window, command=deleteItem, text="Delete")
delete_btn.pack()

window.mainloop()
