package demo;

public class Student {
	private int id;
	private String first_name;
	private String last_name;

	public Student(int id, String first_name, String last_name) {
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
	}

	public Student(String first_name, String last_name) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
	}

	public Student() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	@Override
	public String toString() {
		return "Student [first_name=" + first_name + ", last_name=" + last_name + "]";
	}

}
