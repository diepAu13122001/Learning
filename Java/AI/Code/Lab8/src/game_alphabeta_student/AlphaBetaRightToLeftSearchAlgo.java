package game_alphabeta_student;

import java.util.Collections;
import java.util.List;

public class AlphaBetaRightToLeftSearchAlgo implements ISearchAlgo {

	@Override
	public void execute(Node node) {
		// TODO Auto-generated method stub
		int v = maxValue(node, Integer.MIN_VALUE, Integer.MAX_VALUE);
		System.out.println("Max value of this map is: " + v);

	}

	public int maxValue(Node node, int alpha, int beta) {
		// Enter your code here
		if (node.isTerminal()) {
			return node.getValue();
		} else {
			int v = Integer.MIN_VALUE;
			List<Node> children = node.getChildren();
			Collections.reverse(children);
			for (Node child : children) {
				v = Math.max(v, minValue(child, alpha, beta));
				if (v >= beta) {
					return v;
				}
				alpha = Math.max(alpha, v);
			}
			return v;
		}
	}

	public int minValue(Node node, int alpha, int beta) {
		// Enter your code here
		if (node.isTerminal()) {
			return node.getValue();
		} else {
			int v = Integer.MAX_VALUE;
			List<Node> children = node.getChildren();
			Collections.reverse(children);
			for (Node child : children) {
				v = Math.min(v, maxValue(child, alpha, beta));
				if (v <= alpha) {
					return v;
				}
				beta = Math.min(beta, v);
			}
			return v;
		}
	}
}
