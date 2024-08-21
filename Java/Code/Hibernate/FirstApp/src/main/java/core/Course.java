package core;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "Courses")
public class Course {
	@Id
	private int id;
	@Column(name = "course_name")
	private String name;
	@ManyToMany(mappedBy = "courses")
	private List<Student> students = new ArrayList<Student>();

	public Course(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public Course(String name) {
		this.name = name;
	}

	public Course() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	public Student getStudent() {
//		return student;
//	}
//
//	public void setStudent(Student student) {
//		this.student = student;
//	}

	@Override
	public String toString() {
		return "Course [id=" + id + ", name=" + name + "]";
	}

}
