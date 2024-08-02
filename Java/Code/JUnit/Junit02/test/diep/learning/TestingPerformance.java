package diep.learning;

import static org.junit.jupiter.api.Assertions.*;

import java.time.Duration;

import org.junit.jupiter.api.Test;

class TestingPerformance {

	// neu dung Junit 4 (ms): @Test(timeout=100) =. ghi assertEquals()
	@Test
	void testSortingMethod_performance() {
		SortingArray s = new SortingArray();
		int unsorted[] = { 3, 6, 1 };
		// neu phuong thuc run < 1ms => pass
		// API rieng cua Junit 5
		assertTimeout(Duration.ofMillis(1), () -> s.sortArray(unsorted)); // fail
	}

}
