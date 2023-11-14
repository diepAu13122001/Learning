package code;

import java.util.*;

public class GA_NQueenAlgo {
	public static final int POP_SIZE = 100;// Population size
	public static final double MUTATION_RATE = 0.03;
	public static final int MAX_ITERATIONS = 10;
	List<Node> population = new ArrayList<Node>();
	Random rd = new Random();

	// initialize the individuals of the population
	public void initPopulation() {
		for (int i = 0; i < POP_SIZE; i++) {
			Node ni = new Node();
			ni.generateBoard();
			population.add(ni);
		}

	}

	public Node execute() {
		// Enter your code here
		// khoi tao quan the
		initPopulation();
		int K = 0;
		while (K < MAX_ITERATIONS) {
			List<Node> newPopulation = new ArrayList<Node>();
			for (int i = 0; i < POP_SIZE; i++) {
				Node x = getParentByRandomSelection();
				Node y = getParentByTournamentSelection();
				Node child = reproduce(x, y);

				// check dot bien
				if (MUTATION_RATE < this.rd.nextDouble(1)) {
					mutate(child);
				}

				// add in pop
				newPopulation.add(child);
			}
			K++;

			this.population = newPopulation;
		}

		Collections.sort(this.population);

		return this.population.get(0);
	}

	// Mutate an individual by selecting a random Queen and
	// move it to a random row.
	// mutate -> đột biến
	public void mutate(Node node) {
		// Enter your code here
		int i = this.rd.nextInt(node.N);
		int row = this.rd.nextInt(node.N);
		node.setRow(i, row);
	}

	// Crossover x and y to reproduce a child
	public Node reproduce(Node x, Node y) {
		// Enter your code here
		// random the crossover point
		int pointer = this.rd.nextInt(Node.N);

		Node child = new Node();
		child.generateBoard();

		// give queens for child
		// check pointer <1 -> child is y
		if (pointer < 1) {
			return y;
			// check pointer > 7 -> child is x
		} else if (pointer > 7) {
			return x;
		} else {
			// father
			for (int i = 0; i < pointer; i++) {
				child.setRow(i, x.getRow(i));
			}
			// mother
			for (int i = pointer; i < Node.N; i++) {
				child.setRow(i, y.getRow(i));
			}
		}

		return child;
	}

	// Select K individuals from the population at random and
	// select the best out of these to become a parent.
	public Node getParentByTournamentSelection() {
		// Enter your code here
		List<Node> newPopulation = new ArrayList<Node>();
		int k = this.rd.nextInt(POP_SIZE);
		while (k == 0) {
			k = this.rd.nextInt(POP_SIZE);
		}
		for (int i = 0; i < k; i++) {
			newPopulation.add(this.population.get(i).getBestCandidate());
		}
		
		Collections.sort(newPopulation);
		return newPopulation.get(0);
	}

	// Select a random parent from the population
	public Node getParentByRandomSelection() {
		// Enter your code here
		Node node = new Node();
		return this.population.get(rd.nextInt(POP_SIZE));
	}

}
