<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
</head>
<body>
	<%
	// kiem tra neu da logout => khong cho bam nut back ve trang cu
	response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
	response.setHeader("Pragma", "no-cache"); // HTTP 1.0
	response.setHeader("Expires", "0"); // Proxies

	// check khi truy cap vao trang => neu chua login thi khong duoc vao
	if (session.getAttribute("username") == null) {
		response.sendRedirect("./login.jsp");
	}
	%>

	<h1>Hello, ${username}</h1>
	<h3>
		This is page: <a href="./videos.jsp">videos</a>
	</h3>

	<button type="button" class="btn btn-danger"
		onclick="location.href = '../logout'">Logout here</button>

</body>
</html>