package com.diep;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.diep.DAO.StudentDAO;
import com.diep.model.Student;

@Controller
public class StudentController {

	@Autowired
	StudentDAO studentDAO;

	@GetMapping("/")
	public String home() {
		return "addStudent";
	}

//	@GetMapping("/studentAccount")
//	public String getStudentList(Student s) {
//		return "studentAccount";
//		// su dung ten class => viet thuong chu cai dau => ten bien trong jsp
//	}

//	@GetMapping("/studentAccount")
//	public String getStudentList1(@ModelAttribute Student s) {
//		return "studentAccount";
//		// su dung ten class => viet thuong chu cai dau => ten bien trong jsp
//	}

	@PostMapping("/studentAccount")
	public String getStudent(@ModelAttribute("s1") Student s, Model m) {
		studentDAO.addStudent(s);
		m.addAttribute("student", studentDAO.getStudent(s.getId()));
		return "studentAccount";
	}

//	@GetMapping("/studentAccount")
//	public String getStudent(@RequestParam int id, Model m) {
//		m.addAttribute("student", studentDAO.getStudent(id));
//		return "studentAccount";
//	}

	@GetMapping("/studentList")
	public String getStudentList(Model m) {
		m.addAttribute("students", studentDAO.getStudents());
		return "studentList";
	}

	@ModelAttribute
	public void modelData(Model m) {
		m.addAttribute("name", "ABC");
	}
}
