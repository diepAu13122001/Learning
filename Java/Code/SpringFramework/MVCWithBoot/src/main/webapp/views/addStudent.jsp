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
		<label for="name">Name:</label> <input id="name" name="name"
			placeholder="Name" type="text" /> <br> <label for="point">Point:</label>
		<input id="point" name="point" placeholder="point" type="number" min=0
			max=10 step="0.001" /> <br> <input type="submit" value="Submit"
			id="button-1" />
	</form>

	<hr>
	<form action="/getStudent">
		<input type="number" min=1 placeholder="Student Id" id="id" name="id" />
		<input type="submit" value="Submit" id="button-1" />
	</form>

	<hr>
	<form action="/getStudentsByName">
		<input type="text" placeholder="Student name" id="name" name="name" />
		<input type="submit" value="Submit" id="button-1" />
	</form>
</body>
</html>