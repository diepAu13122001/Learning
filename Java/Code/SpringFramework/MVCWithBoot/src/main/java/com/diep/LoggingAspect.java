package com.diep;

import org.aspectj.lang.annotation.*;
import org.slf4j.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
	// tao logger factory
	private static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);

	@Before("execution(public * com.diep.StudentRestController.findAll())")
	public void beforeLog() {
		LOGGER.info("---Before calling method findAll() ---");
	}

	@After("execution(public * com.diep.StudentRestController.findAll())")
	public void afterLog() {
		LOGGER.info("---After run findAll() ---");
	}

	@AfterReturning("execution(public * com.diep.StudentRestController.findAll())")
	public void returnedLog() {
		LOGGER.info("---After return values of findAll() ---");
	}
	
	@AfterThrowing("execution(public * com.diep.StudentRestController.findAll())")
	public void exceptionLog() {
		LOGGER.info("---findAll() had errors ---");
	}
}
