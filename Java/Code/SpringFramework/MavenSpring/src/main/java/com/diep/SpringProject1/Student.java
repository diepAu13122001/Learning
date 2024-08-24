package com.diep.SpringProject1;

import org.springframework.stereotype.Component;

@Component
public class Student {
	private int age;
	private Laptop laptop;

//	public Student() {
//		System.out.println("Create instance...");
//	}

	public int getAge() {
		return age;
	}

	public Student(int age) {
		System.out.println("Constructor here!");
		this.age = age;
	}

	public void setAge(int age) {
		System.out.println("Set new value for age...");
		this.age = age;
	}

	public Laptop getLaptop() {
		return laptop;
	}

	public void setLaptop(Laptop laptop) {
		this.laptop = laptop;
	}

	public void sayHello() {
		System.out.println("Hello...");
	}

}
