package graph_search;

import tree_search.DepthLimitedSearch;

public class Test {
	public static void main(String[] args) {
		Node nodeS = new Node("S");
		Node nodeA = new Node("A");
		Node nodeB = new Node("B");
		Node nodeC = new Node("C");
		Node nodeD = new Node("D");
		Node nodeE = new Node("E");
		Node nodeF = new Node("F");
		Node nodeG = new Node("G");
		Node nodeH = new Node("H");

		nodeS.addEdge(nodeA, 5);
		nodeS.addEdge(nodeB, 2);
		nodeS.addEdge(nodeC, 4);
		nodeA.addEdge(nodeD, 9);
		nodeA.addEdge(nodeE, 4);
		nodeB.addEdge(nodeG, 6);
		nodeC.addEdge(nodeF, 2);
		nodeD.addEdge(nodeH, 7);
		nodeE.addEdge(nodeG, 6);
		nodeF.addEdge(nodeG, 1);

		ISearchAlgo algo1 = new BreadthFirstSearchAlgo();
		ISearchAlgo algo2 = new DepthFirstSearchAlgo();
		ISearchAlgo algo3 = new UniformCostSearch();

//		Node result1 = algo1.execute(nodeS, "G");
//		Node result2 = algo2.execute(nodeS, "G");
//		Node result5 = algo3.execute(nodeS, "G");

//		Node result3 = algo1.execute(nodeS, "C", "G");
//		Node result4 = algo2.execute(nodeS, "B", "G");
//		Node result6 = algo3.execute(nodeS, "S", "G");

		NodeUtils p = new NodeUtils();

		System.out.println("----------- BFS --------------");
//		System.out.println(p.printPath(result1));
//		System.out.println(p.printPath(result3));

		System.out.println("----------- DFS --------------");
//		System.out.println(p.printPath(result2));
//		System.out.println(p.printPath(result4));

		System.out.println("----------- UCS --------------");
//		System.out.println(p.printPath(result5));
//		System.out.println("Pahtcost: " + result5.getPathCost());
//		System.out.println(p.printPath(result6));
//		System.out.println("Pahtcost: " + result6.getPathCost());

	}
}
