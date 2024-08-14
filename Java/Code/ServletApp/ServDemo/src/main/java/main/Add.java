package main;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

/**
 * Servlet implementation class Add
 */
@WebServlet(name = "Add", value = "/Add")
public class Add extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public Add() {
		// TODO Auto-generated constructor stub
	}

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		processRequest(req, res);
	}

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		processRequest(req, res);
	}

	public void processRequest(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		int i = Integer.parseInt(req.getParameter("first_num"));
		int j = Integer.parseInt(req.getParameter("second_num"));

		int sum = i + j;

		// change to second servlet by request dispatcher
//		req.setAttribute("sum", sum);
//		RequestDispatcher rd = req.getRequestDispatcher("SecondServlet");
//		rd.forward(req, res);

		// change to second servlet by send redirect
//		res.sendRedirect("SecondServlet?sum=" + sum); // url rewriting

		// dung session de luu du lieu
//		HttpSession session = req.getSession();
//		session.setAttribute("sum", sum);
//		res.sendRedirect("SecondServlet");

		// dung cookies
		Cookie cookie = new Cookie("sum", sum + ""); // bien nhap vao phai la string
		res.addCookie(cookie);
		res.sendRedirect("SecondServlet");
	}

}
