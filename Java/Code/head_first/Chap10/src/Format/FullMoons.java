package Format;

import java.util.Calendar;

public class FullMoons {
	static int DAY_IM = 1000 * 60 * 60 * 24;

	public static void main(String[] args) {
		Calendar c = Calendar.getInstance();
		c.set(2004, 0, 7, 15, 40);
		long day1 = c.getTimeInMillis();
		for (int i = 0; i < 60; i++) {
			day1 += (DAY_IM * 29.25);
			c.setTimeInMillis(day1);
			System.out.println(String.format("Full moons on %tc", c));
		}
	}
}
