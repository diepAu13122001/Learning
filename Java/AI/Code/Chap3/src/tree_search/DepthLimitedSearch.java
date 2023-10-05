package tree_search;

import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

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
		System.out.println(root.getLabel());
		if (root.getLabel().equals(goal)) {
			return root;
		} else if (limitedDepth == 0) {
			return null;
		} else {
			List<Node> children = root.getChildrenNodes();

			if (children.size() == 0) {
				return null;
			}

			for (Node child : children) {
				return execute(child, goal, limitedDepth - 1);
			}

		}
		return null;

	}

}
