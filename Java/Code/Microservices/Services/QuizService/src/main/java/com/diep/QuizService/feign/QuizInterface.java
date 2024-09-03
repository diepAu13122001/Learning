package com.diep.QuizService.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.diep.QuizService.model.*;

@FeignClient("QUESTIONSERVICE")
public interface QuizInterface {
	@GetMapping("/questions/generate")
	public ResponseEntity<List<Integer>> getQuestionsForQuiz(@RequestParam String category, @RequestParam int limit);
	
	@PostMapping("/questions/getQuestions")
	public ResponseEntity<List<QuestionWrapper>> getQuestionsByIds(@RequestBody List<Integer> questionIds) ;
	
	@PostMapping("/questions/getScore")
	public ResponseEntity<Integer> getScore(@RequestBody List<Answer> answers);
}
