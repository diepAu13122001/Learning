<%@page import="java.sql.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JDBC demo</title>
</head>
<body bgcolor="#e9f7ef">

	<h2>List of Users</h2>
	<ol style="list-style: upper-roman;">
		<%
		// Database connection parameters
		String url = "jdbc:mysql://localhost:3306/jdbc";
		String username = "root";
		String password = "Diep1312#";
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;

		try {
			// Load the MySQL JDBC driver
			// add mysql-connector.jar in lib folder in tomcat folder
			Class.forName("com.mysql.cj.jdbc.Driver");

			// Establish the connection
			conn = DriverManager.getConnection(url, username, password);

			// Prepare the SQL query
			String query = "SELECT first_name, last_name FROM students";
			stmt = conn.prepareStatement(query);

			// Execute the query
			rs = stmt.executeQuery();

			// Iterate over the result set and display each name in an ordered list
			while (rs.next()) {
				String name = rs.getString("first_name") + " " + rs.getString("last_name");
		%>
		<li><%=name%></li>
		<%
		}
		} catch (Exception e) {
		e.printStackTrace();
		} finally {
		// Close the resources
		if (rs != null)
		try {
			rs.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (stmt != null)
		try {
			stmt.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (conn != null)
		try {
			conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		}
		%>
	</ol>


</body>
</html>