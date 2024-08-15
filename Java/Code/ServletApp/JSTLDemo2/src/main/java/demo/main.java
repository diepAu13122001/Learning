package demo;

import java.io.IOException;
import java.util.ArrayList;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.*;

@WebServlet("/")
public class main extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public main() {
	}

	public void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		// dat bien
		String name = "Au Ngoc Diep";
		req.setAttribute("name", name);

		// tao danh sach student
		Student st1 = new Student("Nguyen", "Thi A");
		Student st2 = new Student("Nguyen", "Thi B");
		Student st3 = new Student("Nguyen", "Thi C");
		ArrayList<Student> students = new ArrayList<Student>();
		students.add(st1);
		students.add(st2);
		students.add(st3);
		req.setAttribute("students", students);

		// chuyen trang
//		res.sendRedirect("./index.jsp");
		req.getRequestDispatcher("./index.jsp").forward(req, res);
	}
}
