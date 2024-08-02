package diep.learning;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

// click chuot phai vao class can test => new => junit test
// maven test => chay duoi dang console (surefire-plugin)
// => bao nhieu testcase da chay, thong ke so luong tot hon Eclipse IDE (Junit test - Run as)
class CalcTest {

	@Test
	void test() {
		Calc c = new Calc();
		int actual = c.divide(10, 5);
		int expectedResult = 2;
		assertEquals(expectedResult, actual);
//		assertEquals(12, actual);
	}

}
