package com.diep.SpringProject1;

public class Laptop implements Computer{
	public Laptop() {
		System.out.println("You had a new laptop!");
	}

	@Override
	public void start() {
		System.out.println("Laptop started!");
		
	}
}
