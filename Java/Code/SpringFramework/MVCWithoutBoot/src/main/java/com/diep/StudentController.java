package com.diep;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.diep.model.Student;

@Controller
public class StudentController {
	@GetMapping("/")
	public String home() {
		return "addStudent";
	}

//	@GetMapping("/addStudent")
//	public String getStudentList(Student s) {
//		return "studentAccount";
//		// su dung ten class => viet thuong chu cai dau => ten bien trong jsp
//	}

//	@GetMapping("/addStudent")
//	public String getStudentList1(@ModelAttribute Student s) {
//		return "studentAccount";
//		// su dung ten class => viet thuong chu cai dau => ten bien trong jsp
//	}

	@PostMapping("/studentAccount")
	public String getStudent(@ModelAttribute("s1") Student s) {
		return "studentAccount";
	}

	@GetMapping("/studentList")
	public String getStudentList(Model m) {
		List<Student> students = Arrays.asList(new Student(3, "ABC", 2.9), new Student(4, "XYZ", 3.9));
		m.addAttribute("students", students);
		return "studentList";
	}

	@ModelAttribute
	public void modelData(Model m) {
		m.addAttribute("name", "ABC");
	}
}
