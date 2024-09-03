package com.diep.QuestionService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.diep.QuestionService.Service.QuestionService;
import com.diep.QuestionService.model.Answer;
import com.diep.QuestionService.model.Question;
import com.diep.QuestionService.model.QuestionWrapper;

@RestController
@RequestMapping("/questions")
public class QuestionController {

	@Autowired
	QuestionService questionService;
	
	@Autowired
	Environment environment;

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
	
	@GetMapping("/generate")
	public ResponseEntity<List<Integer>> getQuestionsForQuiz(@RequestParam String category, @RequestParam int limit) {
		return this.questionService.getQuestionsForQuiz(category, limit);
	}
	
	@PostMapping("/getQuestions")
	public ResponseEntity<List<QuestionWrapper>> getQuestionsByIds(@RequestBody List<Integer> questionIds) {
		// kiem tra thu dang chay port nao
		System.out.println(this.environment.getProperty("local.server.port"));
		return this.questionService.getQuestionsByIds(questionIds);
	}
	
	@PostMapping("/getScore")
	public ResponseEntity<Integer> getScore(@RequestBody List<Answer> answers) {
		return this.questionService.getScore(answers);
	}

}
