package graph_search;


public class Test {
	public static void main(String[] args) {
		String[] agloList = { "BFS1", "BFS2", "DFS1", "DFS2", "UCS1", "UCS2" };
		for (String algoS : agloList) {
			// draw the map
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
			// my style <3
//			nodeH.addEdge(nodeG, 7);
			NodeUtils p = new NodeUtils();

			switch (algoS) {
			case "BFS1": {

				ISearchAlgo algo1 = new BreadthFirstSearchAlgo();
				Node result1 = algo1.execute(nodeS, "G");

				System.out.println("----------- BFS1 --------------");
				System.out.println(p.printPath(result1));
				break;
			}
			case "BFS2": {

				ISearchAlgo algo1 = new BreadthFirstSearchAlgo();
				Node result3 = algo1.execute(nodeS, "C", "G");

				System.out.println("----------- BFS2 --------------");
				System.out.println(p.printPath(result3));
				break;
			}
			case "DFS1": {
				ISearchAlgo algo2 = new DepthFirstSearchAlgo();
				Node result2 = algo2.execute(nodeS, "G");

				System.out.println("----------- DFS1 --------------");
				System.out.println(p.printPath(result2));
				break;
			}
			case "DFS2": {
				ISearchAlgo algo2 = new DepthFirstSearchAlgo();
				Node result4 = algo2.execute(nodeS, "B", "G");

				System.out.println("----------- DFS2 --------------");
				System.out.println(p.printPath(result4));
				break;
			}
			case "UCS1": {
				ISearchAlgo algo3 = new UniformCostSearch();
				Node result5 = algo3.execute(nodeS, "G");

				System.out.println("----------- UCS1 --------------");
				System.out.println(p.printPath(result5));
				System.out.println("Pahtcost: " + result5.getPathCost());
				break;
			}
			case "UCS2": {
				ISearchAlgo algo3 = new UniformCostSearch();
				Node result6 = algo3.execute(nodeS, "A", "G");

				System.out.println("----------- UCS2 --------------");
				System.out.println(p.printPath(result6));
				System.out.println("Pahtcost: " + result6.getPathCost());
				break;
			}
			default:
				throw new IllegalArgumentException("Unexpected value: " + algoS);
			}
		}
	}

}
