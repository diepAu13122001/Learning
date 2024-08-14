package main;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * Servlet implementation class SecondServlet
 */
@WebServlet("/SecondServlet")
public class SecondServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public SecondServlet() {
		// TODO Auto-generated constructor stub
	}

	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
//		int sum = (int) req.getAttribute("sum"); // cach dispatcher

//		int sum = Integer.parseInt(req.getParameter("sum")); // cach send direct - url rewriting

		// dung session (login, signup)
//		HttpSession session = req.getSession();
//		int sum = (int) session.getAttribute("sum");
//		session.removeAttribute("sum");

		// dung cookies (phai co token
		int sum = 0;
		Cookie[] cookies = req.getCookies();
		for (Cookie c : cookies) {
			if (c.getName().equals("sum")) {
				sum = Integer.parseInt(c.getValue());
			}
		}
		

		PrintWriter out = res.getWriter();
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println("<head>");
		out.println("<meta charset=\"UTF-8\" />");
		out.println("<title>Second Servlet </title>");
		out.println("</head>");
		out.println("<body>");
		out.println("<h1> Second Servlet </h1>");
		out.println("<h3> Sum: " + sum + "</h3>");
		out.println("</body>");
		out.println("</html>");
	}

}
