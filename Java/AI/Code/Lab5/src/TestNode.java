
import java.util.Arrays;
import java.util.List;

public class TestNode {

	public static void main(String[] args) {
		Puzzle p = new Puzzle();
		p.readInput("C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Java\\AI\\Code\\Lab5\\src\\PuzzleMap.txt",
				"C:\\Users\\diepa\\OneDrive\\Documents\\Learning\\Java\\AI\\Code\\Lab5\\src\\PuzzleGoalState.txt");
		Node initialState = p.getInitialState();
//		Node tmp = new Node(initialState);
//		System.out.println(initialState.equals(tmp));
//		Node goalState = p.getGoalState();
//		System.out.println(p.getInitialState());
//		System.out.println("H: "+initialState.getH());
//		System.out.println(Arrays.toString(initialState.getWhiteTilePosition()));
//		System.out.println(p.getGoalState());
//		Node re = p.moveWhiteTile(initialState, 'd');

//		System.out.println(re);
//		System.out.println(re.getH());
//		System.out.println(initialState);
//		System.out.println(Arrays.toString(re.getWhiteTilePosition()));
//		System.out.println(p.computeH(init, goal));

		// System.out.println(p.getInitialState());
		// System.out.println(p.getGoalState());
		//
		// List<Node> children = p.getSuccessors(initialState);
		// System.out.println("Size: "+children.size());
		// for (Node child : children) {
		// System.out.println(child.getH()+" "+p.computeH(child) );

		System.out.println("----------------- Greedy ----------------------");
		System.out.println(p.executeGreedy(p));
		System.out.println("----------------- A Start ----------------------");
		System.out.println(p.executeAStart(p));
	}
}
