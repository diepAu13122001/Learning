package diep.learning;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Test;

class TestBeforeAfter {

	// run 1 time when start (first time)
	// static: independent of instances of this class
	@BeforeAll
	static void BeforeAll() {
		System.out.println("Before all");
	}

	@AfterAll
	static void AfterAll() {
		System.out.println("End of all tests");
	}

	ReverseString s;

	// run before running the test methods (every single test method)
	// => for creating fake data to test and connect...
	// => clear the same code in each method
	@BeforeEach
	void init() {
		s = new ReverseString();
		System.out.println("Before testing");
	}

	@Test
	void testA() {
		assertEquals("hanah", s.reverseString("hanah"));
	}

	@Test
	void testB() {
		assertEquals("anna", s.reverseString("anna"));
	}

	// for: clean data, close files, destroy instances
	@AfterEach
	void destroy() {
		System.out.println("After testing");
	}
}
