package com.diep;

import org.springframework.boot.SpringApplication;

import java.util.*;
import java.util.stream.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringMvcDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringMvcDemoApplication.class, args);
//		stream_api();
	}

	public static void stream_api() {
		Integer[] arr = new Integer[] { 1, 6, 4, 6, 7, 8, 4, 7, 9, 54, 8, 6, 9, 0, 3, 2, 16, 7, 764, 4 };
		List<Integer> elements = Stream.of(arr).filter(element -> element % 2 == 0).collect(Collectors.toList());
		System.out.println(elements.size());
	}

}
