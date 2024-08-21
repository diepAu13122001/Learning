package core;

import java.util.ArrayList;

import org.hibernate.*;
import org.hibernate.cfg.Configuration;

public class App {
	public static void main(String[] args) {
		// create object
		StudentName studentName1 = new StudentName("Luong", "Gia", "Han");
		StudentName studentName2 = new StudentName("Lam", "Thai", "Man");
		StudentName studentName3 = new StudentName("Nguyen", "Hoang", "Ha");

		LibraryAccount libraryAccount1 = new LibraryAccount("student1", "123456");
		libraryAccount1.setId(1);
		LibraryAccount libraryAccount2 = new LibraryAccount("student2", "abcdef");
		libraryAccount2.setId(2);
		LibraryAccount libraryAccount3 = new LibraryAccount("student3", "123abc");
		libraryAccount3.setId(3);

		Course course1 = new Course(6, "Hibernate");
		Course course2 = new Course(10, "Spring boot");
		Course course4 = new Course(12, "Spring MVC");
		Course course3 = new Course();

		Student student1 = new Student(studentName2, "member", libraryAccount1);
		student1.setId(1);
		student1.getCourses().add(course2);
		student1.getCourses().add(course1);
		Student student2 = new Student(studentName3, "admin", libraryAccount2);
		student2.setId(2);
		student2.getCourses().add(course2);
		Student student3 = new Student();
		Student student4 = new Student(studentName1, "member", libraryAccount3);
		student3.setId(3);
		student4.getCourses().add(course4);

		Teacher teacher1 = new Teacher(1, "Nguyen Van A");
		Teacher teacher2 = new Teacher(2, "Nguyen Van B");
		Teacher teacher3 = new Teacher(3, "Nguyen Van C");
		Teacher teacher4 = new Teacher(4, "Nguyen Van D");

		student1.setTeacher(teacher4);
		student2.setTeacher(teacher1);
		student4.setTeacher(teacher1);
		// tao session
		Configuration configuration = new Configuration().configure().addAnnotatedClass(Student.class)
				.addAnnotatedClass(Course.class).addAnnotatedClass(LibraryAccount.class)
				.addAnnotatedClass(Teacher.class);
		SessionFactory sessionFactory = configuration.buildSessionFactory();
		Session session = sessionFactory.openSession();
		// phai de trong 1 transaction => luu lai => commit len db
		Transaction transaction = session.beginTransaction();
		// create data
		// session.delete(student1);
//		session.save(course1);
//		session.save(course2);
//		session.save(course4);
//
//		session.save(libraryAccount1);
//		session.save(libraryAccount2);
//		session.save(libraryAccount3);
//
//		session.save(teacher1);
//		session.save(teacher2);
//		session.save(teacher3);
//		session.save(teacher4);
//
//		session.save(student1);
//		session.save(student2);
//		session.save(student4);

		// fetch data
		student3 = (Student) session.get(Student.class, 2);

		transaction.commit();
		System.out.println(student3);

	}

}
