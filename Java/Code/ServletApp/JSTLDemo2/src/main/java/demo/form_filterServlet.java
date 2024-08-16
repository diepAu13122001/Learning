package demo;

import java.io.*;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.*;

@WebServlet("/register")
public class form_filterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		PrintWriter out = res.getWriter();
		String username = req.getParameter("username");

		out.println("Wellcome " + username);
	}

}
