package game_nim_student;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Node {
	private List<Integer> data = new ArrayList<Integer>();

	public void add(Integer val) {
		this.data.add(val);
		Collections.sort(this.data, DESCOMPARATOR);
	}

	public void addAll(List<Integer> data) {
		this.data.addAll(data);
		Collections.sort(this.data, DESCOMPARATOR);
	}

	// Get children of the current nodes
	public List<Node> getSuccessors() {
		// Enter your code here
		List<Node> children = new ArrayList<Node>();

		for (int i = 0; i < this.data.size(); i++) {

			int currentPoint = this.data.get(i);
			if (!isTerminal() && currentPoint > 2) {
				for (int point = (currentPoint / 2); point > 0; point--) {
					Node child = new Node();
					child.add(point);
					child.add(currentPoint - point);
					this.data.remove(Integer.valueOf(currentPoint));
					child.addAll(this.data);
					if (!children.contains(child)) {
						children.add(child);
						this.data.remove(Integer.valueOf(currentPoint));
					}
				}
			}
		}
//		System.out.println(children.toString());
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
			return o2.compareTo(o1);
		}
	};

	@Override
	public String toString() {
//		Collections.sort(this.data, DESCOMPARATOR);
		return this.data.toString();
	}

}
