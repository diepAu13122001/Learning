package core;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "Students")
public class Student {
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name = "full_name")
	private StudentName name;
	@Transient // khong luu thuoc tinh vao database
	private String role;
	@OneToOne
	private LibraryAccount libraryAccount;
	@ManyToMany(fetch = FetchType.LAZY)
	private List<Course> courses = new ArrayList<Course>();
	@ManyToOne(fetch = FetchType.EAGER)
	private Teacher teacher;

	public Student() {
	}

	public Student(StudentName name, String role, LibraryAccount libraryAccount, List<Course> courses) {
		this.name = name;
		this.role = role;
		this.libraryAccount = libraryAccount;
		this.courses = courses;
	}

	public Student(StudentName name, String role, LibraryAccount libraryAccount) {
		this.name = name;
		this.role = role;
		this.libraryAccount = libraryAccount;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public StudentName getName() {
		return name;
	}

	public void setName(StudentName name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public LibraryAccount getLibraryAccount() {
		return libraryAccount;
	}

	public void setLibraryAccount(LibraryAccount libraryAccount) {
		this.libraryAccount = libraryAccount;
	}

	public List<Course> getCourses() {
		return courses;
	}

	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", role=" + role + ", libraryAccount=" + libraryAccount
				+ ", courses=" + courses + "]";
	}

}
