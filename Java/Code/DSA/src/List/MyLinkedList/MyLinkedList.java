package List.MyLinkedList;

public class MyLinkedList {
    Node head;

    public MyLinkedList(Node head) {
        this.head = head;
    }

    public MyLinkedList() {
    }

    public Node getHead() {
        return head;
    }

    public void setHead(Node head) {
        this.head = head;
    }

    public String show() {
        if (this.head == null) {
            return "[ ]";
        }
        String s = "[" + this.head.getValue() + ",";
        Node curNode = this.head;
        while (curNode.getNextNode() != null) {
            curNode = curNode.getNextNode();
            s += " " + curNode.getValue() + ",";
        }
        s = s.substring(0, s.length() - 1) + "]";
        return s;
    }

    public void insertAtLast(int i) {
        Node node = new Node(i);
        if (this.head == null) {
            this.head = node;
        } else {
            // insert at last
            Node curNode = this.head;
            while (curNode.getNextNode() != null) {
                curNode = curNode.getNextNode();
            }
            curNode.setNextNode(node);
        }
    }

    public void insertAt(int index, int value) {
        if (index == 0) {
            insertAtFirst(value);
        } else {
            Node node = new Node(value);
            Node curNode = this.head;
            for (int i = 0; i < index - 1; i++) {
                if (curNode.getNextNode() == null) {
                    // tao ra node null
                    curNode.setNextNode(new Node());
                }
                curNode = curNode.getNextNode();
            }
            // add in list
            if (curNode.getNextNode() != null) {
                node.setNextNode(curNode.getNextNode());
            }
            curNode.setNextNode(node);
        }

    }

    public void insertAtFirst(int value) {
        Node node = new Node(value);
        // insert at first (change head and next node)
        node.setNextNode(this.head);
        this.head = node;
    }


    public void delete() {
        if (this.head != null) {
            Node curNode = this.head;
            Node previousNode = null;
            while (curNode.getNextNode() != null) {
                previousNode = curNode;
                curNode = curNode.getNextNode();
            }
            // xoa phan tu cuoi cung
            previousNode.setNextNode(null);
        }
    }

    public void delete(int index) {
        Node curNode = this.head;
        Node previousNode = null;
        // kiem tra ngoai le
        if (curNode.getNextNode() == null && index != 0) {
            throw new RuntimeException("index out of range");
        } else if (index < 0) {
            throw new RuntimeException("index must be positive integer");
        }
        if(index == 0) {
            this.head = this.head.getNextNode();
        }
        while(index > 0) {
            previousNode = curNode;
            curNode = curNode.getNextNode();
            index --;
        }
        // xoa
        previousNode.setNextNode(curNode.getNextNode());
    }
}
