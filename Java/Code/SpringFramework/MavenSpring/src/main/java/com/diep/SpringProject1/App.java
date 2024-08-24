package com.diep.SpringProject1;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
	public static void main(String[] args) {
		// way 1 (class path xml) -------------
//		ClassPathXmlApplicationContext appContext = new ClassPathXmlApplicationContext(
//				new String[] { "spring.xml"});
//		BeanFactory factory = (BeanFactory) appContext;
//		Student myBean = (Student) factory.getBean("student");

		// way 2 (application context) -----------
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring.xml"); // create 1 instance
																									// scope singleton
//		Student myBean = (Student) applicationContext.getBean("student");

		// create obj with singleton scope ------------------------
//		Student student1 = (Student) applicationContext.getBean("student_singleton");
//		student1.setAge(10);
//		System.out.println(student1.getAge()); // 10
//		Student student2 = (Student) applicationContext.getBean("student_singleton");
//		System.out.println(student2.getAge()); // 10 => use of student1

		// create obj with prototype scope ------------------------
//		Student student1 = (Student) applicationContext.getBean("student_prototype"); // create obj1
//		student1.setAge(10);
//		System.out.println(student1.getAge()); // 10
//		Student student2 = (Student) applicationContext.getBean("student_prototype"); // create obj2
//		System.out.println(student2.getAge()); // 0

		// setter injection -------------------------------------------
		Student student = (Student) applicationContext.getBean("student");
		System.out.println(student.getAge());
		student.getComputer().start();
	}
}
