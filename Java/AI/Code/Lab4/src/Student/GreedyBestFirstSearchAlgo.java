package Student;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;

public class GreedyBestFirstSearchAlgo implements IInformedSearchAlgo {

	@Override
	public Node execute(Node root, String goal) {
		// TODO Auto-generated method stub
		PriorityQueue<Node> frontier = new PriorityQueue<Node>(new NodeComparatorByHn());
		List<Node> explored = new ArrayList<Node>();

		root.setG(0);
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
					child.getEnd().setG(curNode.getG() + child.getWeight());
					frontier.add(child.getEnd());

				}
			}
		}
		return null;
	}

	@Override
	public Node execute(Node root, String start, String goal) {
		// TODO Auto-generated method stub
		PriorityQueue<Node> frontier = new PriorityQueue<Node>(new NodeComparatorByHn());
		List<Node> explored = new ArrayList<Node>();

		root.setG(0);
		frontier.add(root);
		
		boolean isFound = false;

		while (frontier.size() != 0) {
			Node curNode = frontier.poll();
			
			
			if (curNode.getLabel().equals(goal)) {
				explored.add(curNode);
				return curNode;
			}
			if (curNode.getLabel().equals(start)) {
				curNode.setParent(null);
				curNode.setG(0);
				isFound = true;
				frontier.clear();
			}

			List<Edge> children = curNode.getChildren();
//			Collections.reverse(children);

			for (Edge child : children) {
				if (!frontier.contains(child.getEnd()) && !explored.contains(child.getEnd())) {
					child.getEnd().setParent(curNode);
					child.getEnd().setG(curNode.getG() + child.getWeight());
					frontier.add(child.getEnd());
				}
			}
			
			if(!isFound) {
				frontier.poll();
			}
		}
		return null;
	}

	@Override
	public boolean isAdmissibleH(Node root, String goal) {
		// TODO Auto-generated method stub
		return false;
	}

}
