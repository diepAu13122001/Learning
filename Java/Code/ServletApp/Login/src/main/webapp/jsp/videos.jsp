<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Videos</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
</head>
<body>
	<%
	// check khi truy cap vao trang => neu chua login thi khong duoc vao
	if (session.getAttribute("username") == null) {
		response.sendRedirect("./login.jsp");
	}
	%>
	<iframe width="1120" height="630"
		src="https://www.youtube.com/embed/4XTsAAHW_Tc?si=FmAt01QPwRxzJiAz&amp;controls=0"
		title="YouTube video player" frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

	<br>
	<button type="button" class="btn btn-danger"
		onclick="location.href = '../logout'">Logout here</button>
</body>
</html>