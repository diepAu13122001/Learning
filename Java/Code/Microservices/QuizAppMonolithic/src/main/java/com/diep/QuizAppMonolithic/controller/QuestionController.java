package com.diep.QuizAppMonolithic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.diep.QuizAppMonolithic.Service.QuestionService;
import com.diep.QuizAppMonolithic.model.Question;

@RestController
@RequestMapping("/questions")
public class QuestionController {

	@Autowired
	QuestionService questionService;

	@GetMapping("/")
	public List<Question> getAllQuestions() {
		return this.questionService.getAllQuestions();
	}

	@PostMapping(path = "/")
	public Question addQuestion(@RequestBody Question question) {
		return this.questionService.addQuestion(question);
	}

	@DeleteMapping("/{id}")
	public void deleteQuestion(@PathVariable int id) {
		this.questionService.deleteQuestion(id);
	}

}
