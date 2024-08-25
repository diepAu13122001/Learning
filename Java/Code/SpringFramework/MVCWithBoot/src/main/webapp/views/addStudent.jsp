<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Student</title>
</head>
<body>
	<form action="/addStudent">
		<label for="id">Id:</label> <input id="id" name="id" placeholder="Id"
			type="number" min=1 /> <br> <label for="name">Id:</label> <input
			id="name" name="name" placeholder="Name" type="text" /> <br> <label
			for="gpa">Id:</label> <input id="gpa" name="gpa" placeholder="GPA"
			type="number" min=0 max=5 step="0.001" /> <br> <input
			type="submit" value="Submit" id="button-1" />

	</form>
</body>
</html>