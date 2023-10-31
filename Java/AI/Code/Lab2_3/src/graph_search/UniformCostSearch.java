package graph_search;

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class UniformCostSearch implements ISearchAlgo {

	@Override
	public Node execute(Node root, String goal) {
		// TODO
		PriorityQueue<Node> frontier = new PriorityQueue<Node>(new NodeComparator());
		List<Node> explored = new ArrayList<Node>();

		root.setPathCost(0);
		frontier.add(root);

		while (frontier.size() != 0) {
			Node curNode = frontier.poll();

			if (curNode.getLabel().equals(goal)) {
				explored.add(curNode);
				return curNode;
			}

			List<Edge> children = curNode.getChildren();

			for (Edge child : children) {
				if (!frontier.contains(child.getEnd()) && !explored.contains(child.getEnd())) {
					child.getEnd().setParent(curNode);
					child.getEnd().setPathCost(curNode.getPathCost() + child.getWeight());
					frontier.add(child.getEnd());

				}
			}
		}
		return null;
	}

	@Override
	public Node execute(Node root, String start, String goal) {
		// TODO
		PriorityQueue<Node> frontier = new PriorityQueue<Node>(new NodeComparator());
		List<Node> explored = new ArrayList<Node>();

		root.setPathCost(0);
		frontier.add(root);

		while (frontier.size() != 0) {
			Node curNode = frontier.poll();

			if (curNode.getLabel().equals(goal)) {
				explored.add(curNode);
				return curNode;
			}
			if (curNode.getLabel().equals(start)) {
				curNode.setParent(null);
				curNode.setPathCost(0);
				frontier.clear();
			}

			List<Edge> children = curNode.getChildren();

			for (Edge child : children) {
				if (!frontier.contains(child.getEnd()) && !explored.contains(child.getEnd())) {
					child.getEnd().setParent(curNode);
					child.getEnd().setPathCost(curNode.getPathCost() + child.getWeight());
					frontier.add(child.getEnd());
				}
			}

		}
		return null;
	}

}
