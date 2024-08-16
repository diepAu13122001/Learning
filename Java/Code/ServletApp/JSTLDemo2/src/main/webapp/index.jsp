<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="jakarta.tags.core" prefix="c"%>
<%@ taglib uri="jakarta.tags.functions" prefix="fn"%>
<%@ taglib uri="jakarta.tags.sql" prefix="sql"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSTL demo</title>
</head>
<body>
	<h1>This is my name: ${name }</h1>

	<!-- core -->
	<c:forEach items="${students}" var="student">
		${student } <br>
	</c:forEach>

	<!-- sql -->
	<sql:setDataSource var="db" driver="com.mysql.jdbc.Driver"
		url="${initParam['url_mysql']}" user="${initParam['username_mysql']}"
		password="${initParam['pass_mysql']}" />
	<sql:query var="resultSet" dataSource="${db}">
	select concat(first_name, " ", last_name) as name from students
	</sql:query>
	<c:forEach items="${resultSet.rows}" var="student">
		<c:out value="${student.name}"></c:out>
		<br>
	</c:forEach>

	<!-- functions -->
	<c:set var="str" value="Au Ngoc Diep"></c:set>
	<c:out value="Length of this string: ${fn:length(str)}"></c:out>
	<br>
	<c:set var="splitArray" value="${fn:split(str, ' ')}" />
	<c:forEach items="${splitArray}" var="s">
		<c:out value="${s}"></c:out>
		<br>
	</c:forEach>

	<h1>
		<a href="./jsp/register.jsp"> Link to form filter </a>
	</h1>
</body>
</html>