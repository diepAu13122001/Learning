<%@page import="demo.Student"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<%
Student student = (Student) request.getAttribute("student");
%>
<title><%=student.getFirst_name() + " " + student.getLast_name()%></title>
</head>
<body bgcolor="#f4ecf7">

	<h1>Your information</h1>
	<ul>
		<li><strong>Your id: </strong> <%=student.getId()%></li>
		<li><strong>Your first name: </strong> <%=student.getFirst_name()%></li>
		<li><strong>Your last name: </strong> <%=student.getLast_name()%></li>
	</ul>
</body>
</html>