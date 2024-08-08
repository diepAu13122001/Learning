package List;

import List.MyLinkedList.MyLinkedList;
import List.MyLinkedList.Node;
import List.MyStack.MyDynamicStack;
import List.MyStack.MyStack;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class Runner {
    public static void implementLinkedList() {
        // use linked list from java lib ----------------------------
        LinkedList list = new LinkedList();

        list.add(5);
        list.add(1);
        list.add(56);
        list.add(1, 12);
        list.addFirst(12);
        list.addLast(12);
        list.remove(); // remove last
        list.remove(-1); // remove by index

        System.out.println(list.toString());

        // my linked list ------------------------------------------------
        System.out.println("Linked List --------------------------------");
        MyLinkedList linkedList = new MyLinkedList(new Node(7, new Node(5)));
        System.out.println("Show list: " + linkedList.show());
        linkedList.insertAtLast(5); // add value
        System.out.println("Insert at last: " + linkedList.show());
        linkedList.insertAt(0, 3);
        System.out.println("Insert at: " + linkedList.show());
        linkedList.insertAtFirst(12);
        System.out.println("Insert at first: " + linkedList.show());
        linkedList.delete(); // remove last
        System.out.println("Delete at last: " + linkedList.show());
        linkedList.delete(2); // remove by index
        System.out.println("Delete: " + linkedList.show());
    }


    public static void main(String[] args) {
        implementStack();

    }

    private static void implementStack() {
        // use stack from java lib ----------------------------
        Stack list = new Stack();

        list.push(12);
        list.push(12);
        list.push(12);
        list.push(12);
        list.push(12);

        System.out.println("Show pop: " + list.pop());
        System.out.println("Show peek: " + list.peek());
        System.out.println(list);

        // my stack ------------------------------------------------
        System.out.println("Stack --------------------------------");
        MyStack nums = new MyStack();
        System.out.println("Show list: " + nums.show());
        nums.push(5); // add value
        nums.push(3); // add value
        nums.push(6); // add value
        nums.push(9); // add value
        nums.push(10); // add value
        nums.push(17); // add value
        System.out.println("Insert at last: " + nums.show());
        System.out.println("Pop value: " + nums.pop());
        System.out.println("Pop value: " + nums.pop());
        System.out.println("Pop value: " + nums.pop());
        System.out.println("Pop value: " + nums.pop());
        System.out.println("Pop value: " + nums.pop());
        System.out.println("Pop value: " + nums.pop());
        System.out.println("Pop value: " + nums.pop());
        System.out.println("Pop value: " + nums.pop());
        System.out.println("remove last item: " + nums.show());
        System.out.println("Peek value: " + nums.peek());
        System.out.println("Find an item: " + nums.show());
        System.out.println("Size of nums: " + nums.size());
        System.out.println("Check empty nums: " + nums.isEmpty());

        // my dynamic stack ------------------------------------------------
        System.out.println("Synamic Stack --------------------------------");
        MyDynamicStack dynamicStack = new MyDynamicStack();
        System.out.println("Show list: " + dynamicStack.show());
        dynamicStack.push(5); // add value
        dynamicStack.push(3); // add value
        dynamicStack.push(6); // add value
        dynamicStack.push(9); // add value
        dynamicStack.push(10); // add value
        dynamicStack.push(17); // add value
        System.out.println("Insert at last: " + dynamicStack.show());
        System.out.println("Pop value: " + dynamicStack.pop());
        System.out.println("Pop value: " + dynamicStack.pop());
        System.out.println("Pop value: " + dynamicStack.pop());
        System.out.println("Pop value: " + dynamicStack.pop());
        System.out.println("Pop value: " + dynamicStack.pop());
        System.out.println("Pop value: " + dynamicStack.pop());
        System.out.println("Pop value: " + dynamicStack.pop());
        System.out.println("Pop value: " + dynamicStack.pop());
        System.out.println("remove last item: " + dynamicStack.show());
        System.out.println("Peek value: " + dynamicStack.peek());
        System.out.println("Find an item: " + dynamicStack.show());
        System.out.println("Size of nums: " + dynamicStack.size());
        System.out.println("Check empty nums: " + dynamicStack.isEmpty());
    }

    private static void implementQueue() {
        // from Java lib -----------------------------------------
        Queue queue = new LinkedList();

        // my queue ----------------------------------------------
        
    }
}
