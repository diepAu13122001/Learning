package List.MyLinkedList;

public class Node {
    private int value;
    private Node nextNode;

    public Node() {
        this.value = 0;
    }

    public Node(int value, Node nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }

    public Node(int value) {
        this.value = value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public void setNextNode(Node nextNode) {
        this.nextNode = nextNode;
    }

    public int getValue() {
        return value;
    }

    public Node getNextNode() {
        return nextNode;
    }


}
