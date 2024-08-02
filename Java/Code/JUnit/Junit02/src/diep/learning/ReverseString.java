package diep.learning;

public class ReverseString {
	public String reverseString(String s) {
		String result = "";
		for (int i = s.length() - 1; i > -1; i--) {
			result += s.charAt(i);
		}
		return result;
	}
}
