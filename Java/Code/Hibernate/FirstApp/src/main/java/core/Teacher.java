package core;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="Teachers")
public class Teacher {
	@Id
	private int id;
	private String full_name;
	@OneToMany (mappedBy = "teacher")
	private List<Student> students = new ArrayList<Student>();

	public Teacher(int id, String full_name) {
		this.id = id;
		this.full_name = full_name;
	}

	public Teacher() {
	}

	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFull_name() {
		return full_name;
	}

	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}

	@Override
	public String toString() {
		return "Teacher [id=" + id + ", full_name=" + full_name + "]";
	}

}
