package demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public abstract class DAO {
	protected String mysql_driver;
	protected String mysql_username;
	protected String mysql_url;
	protected String mysql_password;

	protected Connection connection;

	public DAO() throws SQLException, ClassNotFoundException {
		this.mysql_driver = "com.mysql.cj.jdbc.Driver";
		this.mysql_username = "root";
		this.mysql_url = "jdbc:mysql://localhost:3306/jdbc";
		this.mysql_password = "Diep1312#";

		Class.forName("com.mysql.jdbc.Driver");
		this.connection = DriverManager.getConnection(mysql_url, mysql_username, mysql_password);
	}

}
