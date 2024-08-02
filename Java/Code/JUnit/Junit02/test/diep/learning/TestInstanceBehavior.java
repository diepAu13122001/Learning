package diep.learning;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Test;

// neu muon chi tao 1 instance cho tat ca method khi run
// => xoa satic khi dung beforeAll khi ket hop cung testIntance.per_class
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
//@TestInstance(TestInstance.Lifecycle.PER_METHOD) // default
class TestInstanceBehavior {

	// moi method test => create lai 1 class test
	TestInstanceBehavior() {
		System.out.println("Create a new instance");
	}

	// run 1 time when start (first time)
	// static: independent of instances of this class
	@BeforeAll
	void BeforeAll() {
		System.out.println("Before all");
	}

	@AfterAll
	void AfterAll() {
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
