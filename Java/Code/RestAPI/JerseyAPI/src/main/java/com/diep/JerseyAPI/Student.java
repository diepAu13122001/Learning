package com.diep.JerseyAPI;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "student")
public class Student {
	@XmlElement
	private int id;
	@XmlElement
	private String name;
	@XmlElement
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
