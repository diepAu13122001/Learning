package com.diep.DAO;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ClassUtils;

import com.diep.model.Student;

@Component
public class StudentDAO {
	@Autowired
	private SessionFactory sessionFactory;

	@Transactional
	public List<Student> getStudents() {
		Session session = sessionFactory.getCurrentSession();
		List<Student> students = session.createQuery(String.format("from Student"), Student.class).list();
		return students;
	}

	@Transactional
	public void addStudent(Student s) {
		Session session = sessionFactory.getCurrentSession();
		session.save(s);
	}

	@Transactional
	public Student getStudent(int id) {
		Session session = sessionFactory.getCurrentSession();
		Student student = session.get(Student.class, id);
		return student;
	}
}
