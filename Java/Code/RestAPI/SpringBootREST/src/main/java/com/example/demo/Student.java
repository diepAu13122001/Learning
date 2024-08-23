package com.example.demo;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {
	@Id
	private int id;
	private String name;
	private Double point;

	public Student(String name, Double point) {
		this.name = name;
		this.point = point;
	}

	public Student(int id, String name, Double point) {
		this.id = id;
		this.name = name;
		this.point = point;
	}

	public Student() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPoint() {
		return point;
	}

	public void setPoint(Double point) {
		this.point = point;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Student [name=" + name + ", point=" + point + "]";
	}

}
