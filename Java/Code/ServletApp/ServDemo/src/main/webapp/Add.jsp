<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!int count = 1;%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>First JSP file</title>
</head>
<body bgcolor="#d7bde2">
	<%
	count++;
	%>
	<h1>
		Visit counter: <span><%=count%> </span>
	</h1>

	<%
	//int i = Integer.parseInt(req.getParameter("first_num"));
	//int j = Integer.parseInt(req.getParameter("second_num"));

	//int sum = i + j;
	int sum = 10;
	%>
	<h1>
		Sum of 2 nums: <span> <%=sum%></span>
	</h1>
</body>
</html>