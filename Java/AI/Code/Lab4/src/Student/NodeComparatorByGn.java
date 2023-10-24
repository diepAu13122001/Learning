package Student;

import java.util.Comparator;

public class NodeComparatorByGn implements Comparator<Node> {

	@Override
	public int compare(Node o1, Node o2) {
		// TODO Auto-generated method stub
		Double h1 = o1.getG() + o1.getH();
		Double h2 = o2.getG() + o2.getH();
		int result = h1.compareTo(h2);
		if (result == 0) {
			return o2.getLabel().compareTo(o1.getLabel());
		} else
			return result;
	}

}
