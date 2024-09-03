package com.diep.QuizAppMonolithic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.diep.QuizAppMonolithic.Service.QuestionService;
import com.diep.QuizAppMonolithic.model.Question;

@RestController
@RequestMapping("/questions")
public class QuestionController {

	@Autowired
	QuestionService questionService;

	@GetMapping("/")
	public ResponseEntity<List<Question>> getAllQuestions() {
		return this.questionService.getAllQuestions();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Question> getQUestionById(@PathVariable int id) {
		return this.questionService.getQuestionById(id);
	}

	@PutMapping("/")
	public ResponseEntity<Question> updateQestion(@RequestBody Question question) {
		return this.questionService.updateQestion(question);
	}

	@PostMapping("/add")
	public ResponseEntity<Question> addQuestion(@RequestBody Question question) {
		return this.questionService.addQuestion(question);
	}
	
	@PostMapping("/addAll")
	public ResponseEntity<String> addQuestions(@RequestBody List<Question> questions) {
		return this.questionService.addQuestions(questions);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Boolean> deleteQuestion(@PathVariable int id) {
		return this.questionService.deleteQuestion(id);
	}

	@GetMapping("/category/{category}")
	public ResponseEntity<List<Question>> getQuestionsByCategory(@PathVariable String category) {
		return this.questionService.getQuestionsByCategory(category);
	}

	@GetMapping("/level/{level}")
	public ResponseEntity<List<Question>> getQuestionsByLevel(@PathVariable String level) {
		return this.questionService.getQuestionsByLevel(level);
	}

}
