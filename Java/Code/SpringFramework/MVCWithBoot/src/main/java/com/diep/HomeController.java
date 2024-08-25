package com.diep;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController {

//	@Override
//	public void configureViewResolvers(ViewResolverRegistry registry) {
//		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
//		resolver.setPrefix("/views/");
//		resolver.setSuffix(".jsp");
//		resolver.setViewClass(JstlView.class);
//		registry.viewResolver(resolver);
//	}

	@GetMapping("/")
	public String home() {
		return "index";
	}

	@GetMapping("/sum")
	// way 1 to get input --------------------------------------------------
//	public String sum(HttpServletRequest req, HttpServletResponse res) {
//		int a = Integer.parseInt(req.getParameter("num-a"));
//		int b = Integer.parseInt(req.getParameter("num-b"));
//		int sum = a + b;
//
//		// Use session
//		HttpSession session = req.getSession();
//		session.setAttribute("sum", sum);
//		return "result.jsp";
//	}

	// way 2 to get input --------------------------------------------------
//	public ModelAndView sum(@RequestParam("num-a") int a, @RequestParam("num-b") int b) {
//		int sum = a + b;
//		// use model and view
//		ModelAndView modelAndView = new ModelAndView();
//		modelAndView.setViewName("result");
//		modelAndView.addObject("sum", sum);
//		return modelAndView;
//	}

	// way 3 using model/ modelMap
	// --------------------------------------------------
	public String sum(@RequestParam("num-a") int a, @RequestParam("num-b") int b, Model model) {
		int sum = a + b;
		model.addAttribute("sum", sum);
		return "result";
	}
}
