package graph_search;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Stack;

public class DepthFirstSearchAlgo implements ISearchAlgo {

	@Override
	public Node execute(Node root, String goal) {
		// TODO
		Stack<Node> frontier = new Stack<Node>();
		List<Node> explored = new ArrayList<Node>();

		frontier.push(root);

		while (frontier.size() != 0) {

			Node curNode = frontier.pop();

			if (curNode.getLabel().equals(goal)) {
				explored.add(curNode);
				return curNode;
			}

			List<Node> children = curNode.getChildrenNodes();
			Collections.reverse(children);

			for (Node child : children) {
				if (!frontier.contains(child) && !explored.contains(child)) {
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
		Stack<Node> frontier = new Stack<Node>();
		List<Node> explored = new ArrayList<Node>();

		frontier.push(root);

		while (frontier.size() != 0) {

			Node curNode = frontier.pop();

			if (curNode.getLabel().equals(start)) {
				curNode.setParent(null);
				frontier.clear();
			}

			if (curNode.getLabel().equals(goal)) {
				explored.add(curNode);
				return curNode;
			}

			List<Node> children = curNode.getChildrenNodes();
			Collections.reverse(children);

			for (Node child : children) {
				if (!frontier.contains(child) && !explored.contains(child)) {
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
