package com.diep;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.diep.model.Student;

@RestController
public class StudentRestController {
	@Autowired
	StudentRepo studentRepo;

	@GetMapping(path = "/r-students", produces = { "application/xml" })
//	@ResponseBody // no show prefix and suffix in text/plain data
	public List<Student> findAll() {
		return this.studentRepo.findAll();
	}

	@GetMapping("/r-students/{id}")
	public Student findById(@PathVariable("id") int id) {
		return (Student) this.studentRepo.findById(id).orElse(new Student()); // bat ngoai le cho phuong thuc
	}

	@PostMapping(path = "/r-students", consumes = { MediaType.APPLICATION_JSON_VALUE })
	public Student create(@RequestBody Student student) {
		return this.studentRepo.save(student);
	}
}
