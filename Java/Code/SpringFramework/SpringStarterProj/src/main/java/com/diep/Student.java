package com.diep;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Student {
	
	@Autowired
	Laptop lap; // tu viet them phan tao obj
	public void code() {
		this.lap.compile();
	}
}
