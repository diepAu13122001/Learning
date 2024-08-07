package List;

import List.MyLinkedList.MyLinkedList;
import List.MyLinkedList.Node;

import java.util.LinkedList;

public class Runner {
    public static void implementLinkedList() {
        // use linked list from java lib
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
    }

    public static void main(String[] args) {
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
}
