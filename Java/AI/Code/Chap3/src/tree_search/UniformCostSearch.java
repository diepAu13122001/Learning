package tree_search;

import java.util.List;
import java.util.PriorityQueue;

public class UniformCostSearch implements ISearchAlgo {

	@Override
	public Node execute(Node root, String goal) {
		// TODO
		PriorityQueue<Node> frontier = new PriorityQueue<Node>(new NodeComparator());

		root.setPathCost(0);
		frontier.add(root);

		while (frontier.size() != 0) {
			Node curNode = frontier.poll();

			if (curNode.getLabel().equals(goal)) {
				return curNode;
			}

			List<Edge> children = curNode.getChildren();

			for (Edge child : children) {
				if (!frontier.contains(child.getEnd())) {
					frontier.add(child.getEnd());
					child.getEnd().setParent(curNode);
					child.getEnd().setPathCost(curNode.getPathCost() + child.getWeight());
				}
//				else if ((frontier.contains(child.getEnd())) && (child.getEnd().getPathCost() > curNode.getPathCost())) {
//					child.getEnd().setParent(curNode);
//					curNode = child.getEnd();
//				}
			}
		}
		return null;
	}

	@Override
	public Node execute(Node root, String start, String goal) {
		// TODO
		PriorityQueue<Node> frontier = new PriorityQueue<Node>(new NodeComparator());
		boolean isStarted = false;

		root.setPathCost(0);
		frontier.add(root);

		while (frontier.size() != 0) {

			Node curNode = frontier.poll();
			List<Edge> children = curNode.getChildren();

			if (curNode.getLabel().equals(start)) {
				isStarted = true;
				curNode.setParent(null);
				curNode.setPathCost(0);
				frontier.clear();
			}

			if (curNode.getLabel().equals(goal)) {
				return curNode;
			}

			for (Edge child : children) {
				if (!frontier.contains(child.getEnd())) {
					frontier.add(child.getEnd());
					child.getEnd().setParent(curNode);
					child.getEnd().setPathCost(curNode.getPathCost() + child.getWeight());
				}
			}

			if (!isStarted) {
				curNode = frontier.poll();
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
