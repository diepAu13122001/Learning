package com.diep.SpringBootJDBC.repo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.diep.SpringBootJDBC.model.Student;

@Repository
public class StudentRepo {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public void save(Student student) {
		String sql = "insert into Student (id, name, gpa) values (?,?,?)";
		int rows = this.jdbcTemplate.update(sql, student.getId(), student.getName(), student.getGpa());
		System.out.println(rows + " row/s effected.");
	}

	public List<Student> findAll() {
		String sql = "Select * from student";
//		RowMapper<Student> mapper = new RowMapper<Student>() {
//			@Override
//			public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
//				Student s = new Student(rs.getInt(1), rs.getString(2), rs.getDouble(3));
//				return s;
//			}
//		};

		// using lambda
		List<Student> students = this.jdbcTemplate.query(sql, (rs, rowNum) -> {
			Student s = new Student(rs.getInt(1), rs.getString(2), rs.getDouble(3));
			return s;
		});
		return students;
	}
}
