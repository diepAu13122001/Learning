<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>

<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
	crossorigin="anonymous">
</head>
<body>

	<h1>Login form</h1>
	${SPRING_SECURITY_LAST_EXCEPTION.message }
	<form method="post" action="login">
		<div class="mb-3">
			<label for="username" class="form-label">Email address</label> <input
				type="text" class="form-control" id="username" name="username">
		</div>
		<div class="mb-3">
			<label for="password" class="form-label">Password</label> <input
				type="password" class="form-control" id="password" name="password">
		</div>
		<button type="submit" name="submit" class="btn btn-primary" >Submit</button>
	</form>


	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
		crossorigin="anonymous"></script>
</body>
</html>