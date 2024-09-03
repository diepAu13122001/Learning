package com.diep.QuizService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.diep.QuizService.DAO.QuizDao;
import com.diep.QuizService.Dto.QuizDto;
import com.diep.QuizService.Service.*;
import com.diep.QuizService.model.*;

@RestController
@RequestMapping("quiz")
public class QuizController {
	@Autowired
	QuizService quizService;

	@PostMapping("/create")
	public ResponseEntity<Quiz> createQuiz(@RequestBody QuizDto quizDto) {
		return this.quizService.createQuiz(quizDto.getCategory(), quizDto.getLimit(), quizDto.getTitle());
	}

	@GetMapping("/get/{id}")
	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id) {
		return this.quizService.getQuizQuestions(id);
	}

	@PostMapping("/submit/{id}")
	public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id, @RequestBody List<Answer> answers) {
		return this.quizService.submitQuiz(id, answers);
	}

}
