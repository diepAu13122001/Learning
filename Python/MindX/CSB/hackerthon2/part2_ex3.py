from turtle import *

# initialize list
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']

# draw colors
shape('turtle')
pensize(3)
for color in colors:
  pencolor(color)    # draw color
  forward(30)
  pencolor('white')  # spacing for next color
  forward(20)

mainloop()