package com.diep;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class SpringStarterProjApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication.run(SpringStarterProjApplication.class, args);

		// tao class thong qua spring
		Student student = applicationContext.getBean(Student.class);
		student.code();
	}

}
