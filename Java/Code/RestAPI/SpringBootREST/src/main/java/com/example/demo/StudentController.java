package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

@RestController
public class StudentController {
	@Autowired
	private StudentRepository studentRepository;

	@GetMapping("students")
	public List<Student> getStudents() {
		return (List<Student>) this.studentRepository.findAll();
	}
}
