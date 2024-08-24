package com.diep;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController {

	@GetMapping("/")
	public String home() {
		return "index.jsp";
	}

	@GetMapping("/sum")
	public String sum(HttpServletRequest req, HttpServletResponse res) {
		int a = Integer.parseInt(req.getParameter("num-a"));
		int b = Integer.parseInt(req.getParameter("num-b"));
		int sum = a + b;

		// Use session
		HttpSession session = req.getSession();
		session.setAttribute("sum", sum);
		return "result.jsp";
	}
}
