package game_alphabeta_student;

public class Test {
	public static void testMap1() {
		// map 1
		Node a = new Node("A");
		Node b = new Node("B");
		Node c = new Node("C");
		Node d = new Node("D");
		Node e = new Node("E", 3);
		Node f = new Node("F", 12);
		Node g = new Node("G", 8);
		Node h = new Node("H", 2);
		Node i = new Node("I", 4);
		Node j = new Node("J", 6);
		Node k = new Node("K", 14);
		Node l = new Node("L", 5);
		Node m = new Node("M", 2);

		a.addChild(b);
		a.addChild(c);
		a.addChild(d);
		b.addChild(e);
		b.addChild(f);
		b.addChild(g);
		c.addChild(h);
		c.addChild(i);
		c.addChild(j);
		d.addChild(k);
		d.addChild(l);
		d.addChild(m);

		System.out.println("------------ MIN-MAX --------------");
		ISearchAlgo minMaxAlg = new MiniMaxSearchAlgo();
		minMaxAlg.execute(a);

		System.out.println("--------- ALPHA-BETA --------------");
		ISearchAlgo alphaBetaAlg = new AlphaBetaSearchAlgo();
		alphaBetaAlg.execute(a);

		System.out.println("--------- AB-RIGHT-TO-LEFT --------------");
		ISearchAlgo abRightToLeftAlg = new AlphaBetaRightToLeftSearchAlgo();
		abRightToLeftAlg.execute(a);
	}

	public static void testMap2() {
		// map 1
		Node a = new Node("A");
		Node b = new Node("B");
		Node c = new Node("C");
		Node d = new Node("D", 0);
		Node e = new Node("E");
		Node f = new Node("F");
		Node g = new Node("G", -5);
		Node h = new Node("H", 3);
		Node i = new Node("I", 8);
		Node j = new Node("J");
		Node k = new Node("K");
		Node l = new Node("L", 2);
		Node m = new Node("M");
		Node n = new Node("N", 4);
		Node o = new Node("O");
		Node p = new Node("P", 9);
		Node q = new Node("Q", -6);
		Node r = new Node("R", 0);
		Node s = new Node("S", 3);
		Node t = new Node("T", 5);
		Node u = new Node("U", -7);
		Node v = new Node("V", -9);
		Node w = new Node("W", -3);
		Node x = new Node("X", -5);

		a.addChild(b);
		a.addChild(c);
		a.addChild(d);
		a.addChild(e);
		b.addChild(f);
		b.addChild(g);
		c.addChild(h);
		c.addChild(i);
		c.addChild(j);
		e.addChild(k);
		e.addChild(l);
		e.addChild(m);
		f.addChild(n);
		f.addChild(o);
		j.addChild(p);
		j.addChild(q);
		j.addChild(r);
		k.addChild(s);
		k.addChild(t);
		m.addChild(u);
		m.addChild(v);
		o.addChild(w);
		o.addChild(x);

		System.out.println("------------ MIN-MAX --------------");
		ISearchAlgo minMaxAlg = new MiniMaxSearchAlgo();
		minMaxAlg.execute(a);

		System.out.println("--------- ALPHA-BETA --------------");
		ISearchAlgo alphaBetaAlg = new AlphaBetaSearchAlgo();
		alphaBetaAlg.execute(a);

		System.out.println("--------- AB-RIGHT-TO-LEFT --------------");
		ISearchAlgo abRightToLeftAlg = new AlphaBetaRightToLeftSearchAlgo();
		abRightToLeftAlg.execute(a);
	}

	public static void main(String[] args) {
		System.out.println("--------------- TEST MAP 1 ---------------");
		testMap1();
		
		System.out.println();

		System.out.println("--------------- TEST MAP 2 ---------------");
		testMap2();
	}
}
