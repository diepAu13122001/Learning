package com.diep.JerseyAPI;

import java.util.List;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;

@Path("students")
public class StudentController {
	private StudentRepository studentRepository = new StudentRepository();

	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@GET
	public List<Student> getStudents() {
		return this.studentRepository.getStudents();
	}

	@GET
	@Path("student/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Student getStudent(@PathParam("id") int id) {
		return this.studentRepository.getStudent(id);
	}

	@POST
	@Path("create")
	@Produces(MediaType.APPLICATION_JSON)
	public Student createStudent(Student s) {
		this.studentRepository.create(s);
		return s;
	}

	@PUT
	@Path("update")
	@Produces(MediaType.APPLICATION_JSON)
	public Student updateStudent(Student s) {
		if (getStudent(s.getId()) == null) {
			createStudent(s);
		} else {
			this.studentRepository.update(s);
		}
		return s;
	}

	@DELETE
	@Path("delete/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Student deleteStudent(@PathParam("id") int id) {
		Student student = getStudent(id);
		if (student != null) {
			this.studentRepository.delete(id);
		}
		return student;
	}
}
