package demo;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.sql.SQLException;

import demo.dao.LoginDAO;

@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");

		// static data
//		if (username.equals("admin1") && password.equals("123456")) {
//			// set data vao session
//			HttpSession session = request.getSession();
//			session.setAttribute("username", username);
//
//			response.sendRedirect("./jsp/welcome.jsp");
//		} else {
//			// neu loi => tra nguoc ve login
//			response.sendRedirect("./jsp/login.jsp");
//		}

		// jdbc
		try {
			LoginDAO loginDao = new LoginDAO();
			if (loginDao.checkAccount(username, password)) {
				// set data vao session
				HttpSession session = request.getSession();
				session.setAttribute("username", username);

				response.sendRedirect("./jsp/welcome.jsp");
			} else {
				// neu loi => tra nguoc ve login
				response.sendRedirect("./jsp/login.jsp");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
