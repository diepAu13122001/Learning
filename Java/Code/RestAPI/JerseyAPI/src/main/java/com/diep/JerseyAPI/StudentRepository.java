package com.diep.JerseyAPI;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;

public class StudentRepository {
// DAO to connect with database

	private Connection connection = null;

	public StudentRepository() {
		String url = "jdbc:mysql://localhost:3306/jdbc";
		String username = "root";
		String password = "Diep1312#";
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			this.connection = DriverManager.getConnection(url, username, password);
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	public List<Student> getStudents() {
		List<Student> students = new ArrayList<Student>();
		// fetch data from jdbc
		String sql = "Select * from students";
		try {
			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery(sql);
			while (resultSet.next()) {
				Student student = new Student(resultSet.getInt(1), resultSet.getString(2), resultSet.getDouble(3));
				students.add(student);
			}

		} catch (Exception e) {
			System.out.println(e);
		}
		return students;
	}

	public Student getStudent(int id) {
		String sql = "Select * from students where id=" + id;
		try {
			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery(sql);
			if (resultSet.next()) {
				return new Student(resultSet.getInt(1), resultSet.getString(2), resultSet.getDouble(3));
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

	public void create(Student s) {
		String sql = "insert into students values (?,?,?)";
		try {
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setInt(1, s.getId());
			statement.setString(2, s.getName());
			statement.setDouble(3, s.getPoint());
			statement.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	public void update(Student s) {
		String sql = "update students set name=?, point=? where id=?";
		try {
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setInt(3, s.getId());
			statement.setString(1, s.getName());
			statement.setDouble(2, s.getPoint());
			statement.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	public void delete(int id) {
		String sql = "delete from students where id=?";
		try {
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setInt(1, id);
			statement.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
	}

}
