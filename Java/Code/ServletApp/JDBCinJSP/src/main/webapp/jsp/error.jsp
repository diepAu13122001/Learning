<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Error Page</title>
</head>
<body bgcolor="#f4ecf7">
	<h1>Error: <%= exception.getMessage() %></h1>
</body>
</html>