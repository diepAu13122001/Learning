package demo;

import java.io.*;
import java.sql.*;

import jakarta.servlet.http.*;
import jakarta.servlet.*;
import jakarta.servlet.annotation.*;

@WebServlet("/getStudent")
public class StudentController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		int student_id = Integer.parseInt(request.getParameter("student_id"));

		StudentDAO studentDAO;
		try {
			studentDAO = new StudentDAO();
			Student student = studentDAO.getStudentById(student_id);
			if (student == null) {
				// quay ve trang cu
				response.sendRedirect("./index.jsp");
			} else {
				// set bien de hien thi trong jsp
				request.setAttribute("student", student);
				request.getRequestDispatcher("./showStudent.jsp").forward(request, response);
			}

		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
