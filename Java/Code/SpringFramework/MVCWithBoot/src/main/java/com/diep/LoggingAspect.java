package com.diep;

import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
	
	@Before("execution(public * com.diep.StudentController.getStudentList())")
	public void beforeLog() {
		System.out.println("Before calling method---");
	}
	

}
