package demo;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebFilter("/register")
public class ValidatedFormFilter extends HttpFilter implements Filter {

	public void destroy() {
		// TODO Auto-generated method stub
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// ep kieu cho request + response
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;

		// lay du lieu tu input
		String email = req.getParameter("email");
		String username = req.getParameter("username");
		String password = req.getParameter("password");

		// kiem tra khong duoc rong
		PrintWriter out = res.getWriter();

		if (email.length() > 0 && username.length() > 0 && password.length() > 0) {
			// pass the request along the filter chain
			chain.doFilter(request, response);
		} else {
			out.println("Invalid input");
		}

	}

	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
