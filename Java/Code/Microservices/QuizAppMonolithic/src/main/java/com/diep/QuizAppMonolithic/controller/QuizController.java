package com.diep.QuizAppMonolithic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.diep.QuizAppMonolithic.Service.*;
import com.diep.QuizAppMonolithic.model.*;

@RestController
@RequestMapping("quiz")
public class QuizController {
	@Autowired
	QuizService quizService;

	@PostMapping("/create")
	public ResponseEntity<Quiz> createQuiz(@RequestParam String category, @RequestParam int limit,
			@RequestParam String title) {
		return this.quizService.createQuiz(category, limit, title);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id) {
		return this.quizService.getQuizQuestions(id);
	}
	
	@PostMapping("/submit/{id}")
	public ResponseEntity<String> submitQuiz (@PathVariable Integer id, @RequestBody List<Answer> answers) {
		return this.quizService.submitQuiz(id, answers);
	}

}
