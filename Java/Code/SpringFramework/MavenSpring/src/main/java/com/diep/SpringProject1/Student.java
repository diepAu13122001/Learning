package com.diep.SpringProject1;

import org.springframework.stereotype.Component;

@Component
public class Student {
	private int age;
	private Computer computer;

	public Student() {
		System.out.println("Create instance...");
	}

	public Computer getComputer() {
		return computer;
	}

	public void setComputer(Computer computer) {
		this.computer = computer;
	}

	public int getAge() {
		return age;
	}

//	public Student(int age) {
//		System.out.println("Constructor here!");
//		this.age = age;
//	}

	public void setAge(int age) {
		System.out.println("Set new value for age...");
		this.age = age;
	}

	public void sayHello() {
		System.out.println("Hello...");
	}

}
