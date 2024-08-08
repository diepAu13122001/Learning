package List.MyStack;

public class MyDynamicStack {
    private int capacity = 2;
    private int stack[] = new int[capacity];
    private int top = 0;

    public void push(int value) {
        if (top == capacity) {
            // expanse
            expand(capacity*2);
        }
        stack[top] = value;
        top++;
    }

    public void expand(int newSize) {
        int newStack [] = new int [newSize];
        // clone new stack
        System.arraycopy(stack, 0, newStack, 0, size());
        stack = newStack;
        // gap doi size
        capacity = newSize;
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty!");
            return 0;
        }
        top--;
        int data = stack[top];
        stack[top] = 0;
        shink(); 
        return data;
    }

    private void shink() {
        // giam capacity
        if(size() <= (capacity/2)/2) {
            capacity /=2;
        }
        expand(capacity);
    }

    public int peek() {
        // return the last value
        return isEmpty() ? 0 : stack[top - 1];

    }

    public int size() {
        return top;
    }

    public boolean isEmpty() {
        return top == 0;
    }

    public String show() {
        String s = "[";
        for (int item :
                stack) {
            s += item + ", ";
        }
        s = s.substring(0, s.length() - 2) + "]";
        return s;
    }
}
