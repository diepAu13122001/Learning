package Tree.BinaryTree;

class Node {
    int data;
    Node left;
    Node right;

    public Node(int data) {
        this.data = data;
    }
}

public class BinaryTree {
    Node root;

    public void insert(int data) {
        root = insertRec(root, data);
    }

    public Node insertRec(Node rootNode, int data) {
        if (rootNode == null)
            rootNode = new Node(data);
        else if (data < rootNode.data) {
            // kiem tra xem so lon hon hay be hon node root => xep vao trai hoac phai
            rootNode.left = insertRec(rootNode.left, data);
        } else if (data > rootNode.data) {
            rootNode.right = insertRec(rootNode.right, data);
        }
        return rootNode;
    }

    public void inOrder() {
        System.out.print("In order: ");
        inOrderRec(root);
        System.out.println();
    }

    public void inOrderRec(Node rootNode) {
        if (rootNode != null) {
            inOrderRec(rootNode.left);
            System.out.print(rootNode.data + " ");
            inOrderRec(rootNode.right);
        }
    }

    public void preOrder() {
        System.out.print("Pre order: ");
        preOrderRec(root);
        System.out.println();
    }

    public void preOrderRec(Node rootNode) {
        if (rootNode != null) {
            System.out.print(rootNode.data + " ");
            preOrderRec(rootNode.left);
            preOrderRec(rootNode.right);
        }
    }

    public void postOrder() {
        System.out.print("Post order: ");
        postOrderRec(root);
        System.out.println();
    }

    public void postOrderRec(Node rootNode) {
        if (rootNode != null) {
            postOrderRec(rootNode.left);
            postOrderRec(rootNode.right);
            System.out.print(rootNode.data + " ");
        }
    }
}
