<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home page</title>
</head>
<body>
	<h1>Login successful</h1>
	${userPrincipal }
	<a href="/private/user">user</a>
	<form id="logoutForm" action="/logout">
		<button type="submit">Logout</button>
	</form>
	<script type="text/javascript">
		document.getElementById('logout').onclick = () => {
			window.location.href = "/logout";
			}
	</script>
</body>
</html>