package game_nim_student;

public class MinimaxAlgo {
	public void execute(Node node) {
		int v = minValue(node);
		System.out.println("End of this game: " + v);
	}

	// function MAX-VALUE(state) returns a utility value
	// if TERMINAL-TEST(state) then return UTILITY(state)
	// v <- Integer.MIN_VALUE
	// for each s in SUCCESSORS(state) do
	// v <- MAX(v, MIN-VALUE(s))
	// return v
	public int maxValue(Node node) {
		System.out.println("max:" + node.toString());
		if (!node.isTerminal()) {
			int v = Integer.MIN_VALUE;
			for (Node child : node.getSuccessors()) {
				v = Math.max(v, minValue(child));
			}
			return v;
		}
		return 0;
	}

	// function MIN-VALUE(state) returns a utility value
	// if TERMINAL-TEST(state) then return UTILITY(state)
	// v <- Integer.MAX_VALUE
	// for each s in SUCCESSORS(state) do
	// v <- MIN(v, MAX-VALUE(s))
	// return v
	public int minValue(Node node) {
		System.out.println("min:" + node.toString());
		if (!node.isTerminal()) {
			int v = Integer.MAX_VALUE;
			for (Node child : node.getSuccessors()) {
				v = Math.min(v, maxValue(child));
			}
			return v;
		}
		return 1;
	}
}
