package game_nim_student;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Node {
	private List<Integer> data = new ArrayList<Integer>();

	public void add(Integer val) {
		this.data.add(val);
	}

	public void addAll(List<Integer> data) {
		this.data.addAll(data);
	}

	// Get children of the current nodes
	public List<Node> getSuccessors() {
		// Enter your code here
		List<Node> children = new ArrayList<Node>();
		for (int i = 0; i < this.data.size(); i++) {
			Collections.sort(this.data, DESCOMPARATOR);

			int currentPoint = this.data.get(i);
			if (!isTerminal() && currentPoint > 2) {
				for (int point = (currentPoint / 2); point > 0; point--) {
					Node child = new Node();
					child.add(point);
					child.add(currentPoint - point);

					ArrayList<Integer> clone = (ArrayList<Integer>) ((ArrayList) this.data).clone();
					clone.remove(Integer.valueOf(currentPoint));
					child.addAll(clone);
					if (!children.contains(child)) {
						children.add(child);
						this.data.remove(Integer.valueOf(currentPoint));
					}
				}
			}
		}
		return children;
	}

	// Check whether a node is terminal or not
	public boolean isTerminal() {
		// Enter your code here
		return this.data.get(0) <= 2;
	}

	public static final Comparator<Integer> DESCOMPARATOR = new Comparator<Integer>() {

		@Override
		public int compare(Integer o1, Integer o2) {
			if (o1 > o2) {
				return -1;
			} else if (o1 < o2) {
				return 1;
			} else
				return 0;
//			return o2.compareTo(o1);
		}
	};

	@Override
	public String toString() {
		Collections.sort(this.data, DESCOMPARATOR);
		return this.data.toString();
	}

}
