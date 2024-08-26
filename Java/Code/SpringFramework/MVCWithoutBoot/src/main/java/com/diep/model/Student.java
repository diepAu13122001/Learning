package com.diep.model;

import javax.persistence.*;

@Entity
@Table(name = "students")
public class Student {
	private int id;
	private String name;
	private double point;

	public Student(int id, String name, double point) {
		this.id = id;
		this.name = name;
		this.point = point;
	}

	public Student() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getGpa() {
		return point;
	}

	public void setGpa(double gpa) {
		this.point = gpa;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", point=" + point + "]";
	}

}
