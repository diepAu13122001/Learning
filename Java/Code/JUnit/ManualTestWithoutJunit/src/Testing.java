
public class Testing {
	public static void main(String[] args) {
		Calc c = new Calc();

		// test case - manual testing without framework
		int result = c.divide(10, 5);
		if (result == 2) {
			System.out.println("Test is passed");
		} else {
			System.out.println("Test is failed");
		}
	}
}
