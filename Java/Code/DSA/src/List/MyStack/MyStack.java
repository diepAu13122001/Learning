package List.MyStack;

public class MyStack {
    private int stack[] = new int[5];
    int top = 0;

    public void push(int value) {
        if (top == 5) {
            System.out.println("Stack is full");
            return;
        }
        stack[top] = value;
        top++;
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty!");
            return 0;
        }
        top--;
        int data = stack[top];
        stack[top] = 0;
        return data;
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
