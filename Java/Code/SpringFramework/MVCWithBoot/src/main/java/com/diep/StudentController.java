package com.diep;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.diep.model.Student;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class StudentController {

	@Autowired
	StudentRepo studentRepo;

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
	public String getStudentAccount2(@ModelAttribute("s1") Student s) {
		this.studentRepo.save(s);
		return "studentAccount";
	}

	@GetMapping("/getStudent")
	public String getStudent(@RequestParam int id, Model m) {
//		m.addAttribute("s1", this.studentRepo.findById(id));
		m.addAttribute("s1", this.studentRepo.getOne(id));
		return "studentAccount";
	}

	@ModelAttribute
	public void modelData(Model m) { // for every jsp file can get this var
		m.addAttribute("name", "ABC");
	}

	@GetMapping("/studentList")
	public String getStudentList(Model m) {
		m.addAttribute("students", this.studentRepo.findAll());
		return "studentList";
	}

	@GetMapping("/getStudentsByName")
	public String getStudentsByName(@RequestParam String name, Model m) {
//		m.addAttribute("students", this.studentRepo.findAllByNameOrderByIdDesc(name));
		m.addAttribute("students", this.studentRepo.findAllByKeyword(name));
		return "studentList";
	}
}
