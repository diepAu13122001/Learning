package demo.dao;

import java.sql.*;

public class LoginDAO extends DAO {

	public LoginDAO() throws ClassNotFoundException, SQLException {
		super();
	}

	public boolean checkAccount(String username, String password) throws SQLException {
		String sql = "select * from accounts where username=? and pass=?";
		PreparedStatement preparedStatement = this.connection.prepareStatement(sql);
		preparedStatement.setString(1, username);
		preparedStatement.setString(2, password);

		ResultSet rs = preparedStatement.executeQuery();
		while (rs.next()) {
			return true;
		}
		return false;
	}

}
