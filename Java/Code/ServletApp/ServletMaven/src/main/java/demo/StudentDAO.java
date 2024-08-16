package demo;

import java.sql.*;

public class StudentDAO extends DAO {

	public StudentDAO() throws ClassNotFoundException, SQLException {
		super();
	}

	public Student getStudentById(int student_id) throws SQLException {
		String sql = "select * from students where id=?";
		PreparedStatement preparedStatement = this.connection.prepareStatement(sql);
		preparedStatement.setInt(1, student_id);

		ResultSet rs = preparedStatement.executeQuery();
		while (rs.next()) {
			Student student = new Student(rs.getInt(1), rs.getString(2), rs.getString(3));
			return student;
		}
		return null;
	}

}
