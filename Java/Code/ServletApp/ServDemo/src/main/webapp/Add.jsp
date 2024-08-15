<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" errorPage="error.jsp"%>
<%!int count = 0;%>
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
	// xu ly loi trong try - catch
	int sum = 0;
	try {
		int i = Integer.parseInt(request.getParameter("first_num"));
		int j = Integer.parseInt(request.getParameter("second_num"));

		sum = i + j;
	} catch (Exception e) {
		out.println("Error: " + e);
	}
	%>

	<h1>
		Sum of 2 nums: <span> <%=sum%></span>
	</h1>

	<%
	// thu cach 2: bat error sang trang khac
	int k = 9 / 0;
	out.println(k);
	%>

	<%
	// add an atribute in session
	pageContext.setAttribute("name", "Diep Au");
	out.print(pageContext.getAttribute("name"));
	%>

</body>
</html>