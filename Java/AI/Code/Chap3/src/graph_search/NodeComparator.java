package graph_search;

import java.util.Comparator;

public class NodeComparator implements Comparator<Node> {

	@Override
	public int compare(Node o1, Node o2) {
		// TODO
		if (o1.getPathCost() > o2.getPathCost()) {
			return 1;
		} else if (o1.getPathCost() < o2.getPathCost()) {
			return -1;
		} else {
			return 0;
		}
	}

}
