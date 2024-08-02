package diep.learning;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;

import org.junit.jupiter.api.Test;

class ReverseStringTest {

	/*
	 * Khac biet Junit4 - 5: 5: test annotation: test is a default method 4: test
	 * annotation: test is a public method
	 */
//	@Test
	void test() {
		ReverseString reverse = new ReverseString();
		assertEquals("avaJ", reverse.reverseString("Java"), "test passed"); // true
//		assertEquals("ava", reverse.reverseString("Java"), "test failed"); // false
	}

	// neu khong co them annotation test => khong chay khi run
	void test1() {
		ReverseString reverse = new ReverseString();
		assertEquals("ava", reverse.reverseString("Java"), "test failed"); // true
	}

	void test2() {
		ReverseString reverse = new ReverseString();
		// co them lamda: () ->
		// => phan string se khong duoc chay den khi 2 tham so o phia truoc bi loi
		// k co lamda phan string message se chay nhung chi cho hien thi neu test failed
		assertEquals("ava", reverse.reverseString("Java"), () -> "test failed");
	}

//	@Test
	void testArr() {
		int[] arrA = { 1, 2, 3, 4 };
		int[] arrB = { 4, 3, 2, 1 };
		Arrays.sort(arrB);
		// compare 2 arrays (compare one by one element with each other)
		// 1-1, 2-2, ...
		assertArrayEquals(arrA, arrB);

		// compare toString()- address of arrays
		assertEquals(arrA, arrB);
	}

//	@Test
	void testArr_Exception_TryCatch() {
		int[] arrA = { 1, 2, 3, 4 };
		int[] arrB = null; // vi du cho exception khi viet code
		try {
			for (int i : arrB) {
//			for (int i : arrA) {
				System.out.println(i);
			}
			System.out.println("Exception generated");
			fail();
		} catch (NullPointerException e) {
			System.out.println("This method had an exception");
		}
	}

	@Test
	void testArr_Exception_throwAPI() {
		int[] arrA = { 1, 2, 3, 4 };
		int[] arrB = null; // vi du cho exception khi viet code

		assertThrows(NullPointerException.class, () -> Arrays.sort(arrA)); // fail
		assertThrows(NullPointerException.class, () -> Arrays.sort(arrB)); // pass
	}

}
