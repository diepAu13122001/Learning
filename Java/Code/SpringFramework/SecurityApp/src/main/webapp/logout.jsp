<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Logout</title>
</head>
<body>
	<h1>Logout successful</h1>
	<button id="login">Login</button>
	<script type="text/javascript">
		document.getElementById('login').onclick = () => {
			window.location.href = "/login";
			}
	</script>
</body>
</html>