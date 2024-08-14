package main;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class VisitCounter
 */
@WebServlet(urlPatterns = { "/VisitCounter" })
public class VisitCounter extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public VisitCounter() {
		// TODO Auto-generated constructor stub
	}

	int i = 0;

	public void init() { // run as soon as load this page (/visitcounter)
		i = 1;
	}

	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
		PrintWriter out = res.getWriter();
		out.println("Num of visitor: " + i);
		i++;
	}
}
