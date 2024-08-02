package Format;

import java.util.Date;

public class TestDateFormat {

	public static void main(String[] args) {
		Date d = new Date();
		String s = String.format("%tA %<tB %<td", d);
		System.out.println(s);
	}
}
