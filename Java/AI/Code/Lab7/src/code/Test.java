package code;

public class Test {
	public static void main(String[] args) {
		Node node = new Node();

		GA_NQueenAlgo alg = new GA_NQueenAlgo();
		long startTime = System.currentTimeMillis();
		System.out.println("Waiting...");
		alg.execute().displayBoard();
		long endTime = System.currentTimeMillis();

		System.out.println("Max iteration: " + GA_NQueenAlgo.MAX_ITERATIONS);
		System.out.println("Running time: " + (endTime - startTime) / 1000 + "s");
	}
}
