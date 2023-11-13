package student;

import java.util.*;

public class HillClimbing {
	public Node execute(Node initialState) {
		Node curNode = initialState;
		Node neighborNode = new Node();

		List<Node> allCandidates = curNode.generateAllCandidates();
		for (int i = 0; i < allCandidates.size(); i++) {
			neighborNode = allCandidates.get(i);


			if (curNode.getH() > neighborNode.getH()) {
				curNode = neighborNode;
				allCandidates.remove(i);
			} else {
				return curNode;
			}
		}
		return null;
	}

	public Node executeHillClimbingWithRandomRestart(Node initialState) {
		Node state = execute(initialState);
		while (state.getH() > 0) {
			state.generateBoard();
			execute(state);
		}
		return state;
	}

	public static void main(String[] args) {
		Node main = new Node();
		main.generateBoard();
		main.displayBoard();

		HillClimbing hc = new HillClimbing();

		System.out.println();
		System.out.println("------------ ex --------------");

		hc.execute(main).displayBoard();

		System.out.println();
		System.out.println("executeHillClimbingWithRandomRestart");

		hc.executeHillClimbingWithRandomRestart(main).displayBoard();
	}

}
