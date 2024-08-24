package com.diep.SpringProject1;

public class Desktop implements Computer {
	public Desktop() {
		System.out.println("You had a new Desktop!");
	}

	@Override
	public void start() {
		System.out.println("Desktop started!");

	}
}
