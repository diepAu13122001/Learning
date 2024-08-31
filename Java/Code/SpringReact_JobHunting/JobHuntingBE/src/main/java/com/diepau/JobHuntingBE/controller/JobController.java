package com.diepau.JobHuntingBE.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.diepau.JobHuntingBE.Repo.JobRepo;
import com.diepau.JobHuntingBE.Repo.SearchRepo;
import com.diepau.JobHuntingBE.model.Job;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.*;
import java.util.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin
public class JobController {
	
	@Autowired
	JobRepo jobRepo;
	
	@Autowired
	SearchRepo searchRepo;

	@Operation(hidden = true)
	@RequestMapping("/")
	public void redirect(HttpServletResponse response) throws IOException {
		response.sendRedirect("/swagger-ui/index.html");
	}
	
	@GetMapping("/jobs")
	@CrossOrigin
	public List<Job> getAllJobs() {
		return this.jobRepo.findAll();
	}
	
	@PostMapping("/job")
	@CrossOrigin
	public Job addJob(@RequestBody Job job) {
		return this.jobRepo.save(job);
	}
	
	@GetMapping("/jobs/{text}")
	@CrossOrigin
	public List<Job> searchJobs(@PathVariable String text) {
		return this.searchRepo.findJobsByText(text);
	}
	
	
}
