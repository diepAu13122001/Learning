package tree_search;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class BreadthFirstSearchAlgo implements ISearchAlgo {

	@Override
	public Node execute(Node root, String goal) {
		// TODO
		Queue<Node> frontier = new LinkedList<Node>();

		frontier.add(root);

		while (frontier.size() != 0) {

			Node curNode = frontier.poll();

			if (curNode.getLabel().equals(goal)) {
				return curNode;
			}

			List<Node> children = curNode.getChildrenNodes();

			for (Node child : children) {
				if (!frontier.contains(child)) {
					frontier.add(child);
					child.setParent(curNode);
				}
			}
		}
		return null;
	}

	@Override
	public Node execute(Node root, String start, String goal) {
		// TODO
		Queue<Node> frontier = new LinkedList<Node>();

		frontier.add(root);

		while (frontier.size() != 0) {

			Node curNode = frontier.poll();
			
			if (curNode.getLabel().equals(start)) {
				curNode.setParent(null);
				frontier.clear();
			}

			if (curNode.getLabel().equals(goal)) {
				return curNode;
			}

			List<Node> children = curNode.getChildrenNodes();

			for (Node child : children) {
				if (!frontier.contains(child)) {
					frontier.add(child);
					child.setParent(curNode);
				}
			}
		}
		return null;
	}
	
	@Override
	public Node execute(Node root, String goal, int limitedDepth) {
		// TODO Auto-generated method stub
		return null;
	}


}
