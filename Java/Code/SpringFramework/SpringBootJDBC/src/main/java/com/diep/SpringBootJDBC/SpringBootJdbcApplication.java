package com.diep.SpringBootJDBC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;

import com.diep.SpringBootJDBC.model.Student;
import com.diep.SpringBootJDBC.repo.StudentRepo;

@SpringBootApplication
@ComponentScan(basePackages = "com.diep.SpringBootJDBC")
public class SpringBootJdbcApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication.run(SpringBootJdbcApplication.class, args);

		Student student = applicationContext.getBean(Student.class);
		student.setId(111);
		student.setName("ABC");
		student.setGpa(3.4);

		StudentRepo repo = applicationContext.getBean(StudentRepo.class);
		repo.save(student);

		System.out.println(repo.findAll());
	}

}
