package tree_search;

import java.util.Collections;
import java.util.List;
import java.util.Stack;

public class DepthLimitedSearch implements ISearchAlgo {

	@Override
	public Node execute(Node root, String goal) {
		// TODO
		return null;
	}

	@Override
	public Node execute(Node root, String start, String goal) {
		// TODO
		return null;
	}

	@Override
	public Node execute(Node root, String goal, int limitedDepth) {
		// TODO
		Stack<Node> frontier = new Stack<>();
		frontier.push(root);
		root.setDepth(0);

		while (!frontier.isEmpty()) {
			Node curNode = frontier.pop();
			if (curNode.getLabel().equals(goal)) {
				return curNode;
			}

			if (curNode.getDepth() < limitedDepth) {
				List<Node> children = curNode.getChildrenNodes();
				Collections.reverse(children);

				for (Node child : children) {
					child.setDepth(curNode.getDepth() + 1);
					if (!frontier.contains(child)) {
						frontier.add(child);
						child.setParent(curNode);
					}
				}

			}
		}

		return null;
	}

	public Node recursiveDLS(Node root, String goal, int limitedDepth) {
		if (root.getLabel().equals(goal)) {
			return root;
		} else if (limitedDepth != 0) {
			for (Node child : root.getChildrenNodes()) {
				child.setDepth(root.getDepth() + 1);
				child.setParent(root);
				Node result = recursiveDLS(child, goal, limitedDepth - 1);
				if (result != null && result.getLabel().equals(goal)) {
					return result;
				}
			}
		}

		return null;
	}

}
