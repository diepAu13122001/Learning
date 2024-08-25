package com.diep;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.diep.model.Student;

@Controller
public class StudentController {
	@GetMapping("/studentHome")
	public String addStudent() {
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

	@GetMapping("/addStudent")
	public String getStudentList2(@ModelAttribute("s1") Student s) {
		return "studentAccount";
	}

	@ModelAttribute
	public void modelData(Model m) {
		m.addAttribute("name", "ABC");
	}
}
