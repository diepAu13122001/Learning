package com.diep.SecurityApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class SecurityAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecurityAppApplication.class, args);
	}

}
