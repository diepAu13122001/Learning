package Student;

import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class AStarSearchAlgo implements IInformedSearchAlgo {

	@Override
	public Node execute(Node root, String goal) {
		// TODO Auto-generated method stub
		PriorityQueue<Node> frontier = new PriorityQueue<Node>(new NodeComparatorByGn());
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
				Node end = child.getEnd();
				if (!frontier.contains(end) && !explored.contains(end)) {
					end.setParent(curNode);
					end.setG(curNode.getG() + child.getWeight());
					frontier.add(end);
				} else if (frontier.contains(end) && (end.getG() > (curNode.getG() + child.getWeight()))) {
					// update the pastcost
					end.setParent(curNode);
					end.setG(curNode.getG() + child.getWeight());
				}
			}
		}
		return null;
	}

	@Override
	public Node execute(Node root, String start, String goal) {
		// TODO Auto-generated method stub
		PriorityQueue<Node> frontier = new PriorityQueue<Node>(new NodeComparatorByGn());
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
				Node end = child.getEnd();
				if (!frontier.contains(end) && !explored.contains(end)) {
					end.setParent(curNode);
					end.setG(curNode.getG() + child.getWeight());
					frontier.add(end);
				} else if (frontier.contains(end) && (end.getG() > (curNode.getG() + child.getWeight()))) {
					// update the pastcost
					end.setParent(curNode);
					end.setG(curNode.getG() + child.getWeight());
				}
			}
		}
		return null;
	}

	@Override
	public boolean isAdmissibleH(Node root, String goal) {
		// TODO Auto-generated method stub
		Node end = execute(root, goal);
		double hStart = end.getG();
		if (root.getH() < hStart) {
			return false;
		} else {
			Node tmp;
			while ((tmp = end.getParent()) != null) {
				System.out.println((hStart - end.getG()));
				if ((hStart - end.getG()) > tmp.getH()) {
					return false;
				}
				end = tmp;
			}
		}
		return true;

	}

}
