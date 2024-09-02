package com.diep.SecurityApp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String home() {
		return "index.jsp";
	}

	@RequestMapping("/private")
	public String privatePage() {
		return "home.jsp";
	}

	@RequestMapping("/login")
	public String loginPage() {
		return "login.jsp";
	}

	@RequestMapping("/logout")
	public String logoutPage() {
		return "logout.jsp";
	}

	@RequestMapping("/public")
	public String publicPage() {
		return "abc.jsp";
	}
	
	@RequestMapping("/private/user")
	@ResponseBody
	public UserPrincipal userPrincipal (UserPrincipal principal) {
		return principal;
	}
}
