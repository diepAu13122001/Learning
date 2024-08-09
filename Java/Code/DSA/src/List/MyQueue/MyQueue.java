package List.MyQueue;

public class MyQueue {
    private int queue[] = new int[5];
    private int size;
    private int front;
    private int rear;

    public MyQueue() {
        this.size = 0;
        this.front = 0;
        this.rear = 0;
    }


    public int[] getQueue() {
        return queue;
    }

    public void setQueue(int[] queue) {
        this.queue = queue;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getFront() {
        return front;
    }

    public void setFront(int front) {
        this.front = front;
    }

    public int getRear() {
        return rear;
    }

    public void setRear(int rear) {
        this.rear = rear;
    }

    public void enQueue(int data) {
        if (isFull()) {
            System.out.println("Queue is full");
        } else {
            queue[rear] = data;
            rear = (rear + 1) % 5;
            size = size + 1;
        }
    }

    public int deQueue() {
        if (isEmpty()) {
            System.out.println("List is empty");
            return 0;
        } else {
            int temp = queue[front];
            queue[front] = 0;
            front = (front + 1) % 5;
            size = size - 1;
            return temp;
        }

    }

    public void show() {
        if (isEmpty()) {
            System.out.println("Empty list");
        } else {
            System.out.print("Elements: ");
            for (int i = 0; i < size; i++) {
                System.out.print(this.queue[(front + i) % 5] + " ");
            }
            System.out.println();

//            for (int n : queue) {
//                System.out.print(n + " ");
//            }
//            System.out.println();
        }

    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == 5;
    }
}
