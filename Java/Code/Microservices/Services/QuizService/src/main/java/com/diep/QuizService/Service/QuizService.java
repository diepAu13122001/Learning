package com.diep.QuizService.Service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;

import com.diep.QuizService.DAO.*;
import com.diep.QuizService.feign.QuizInterface;
import com.diep.QuizService.model.*;

@Service
public class QuizService {
	@Autowired
	QuizDao quizDao;

	@Autowired
	QuizInterface quizInterface;

	public ResponseEntity<Quiz> createQuiz(String category, int limit, String title) {
		try {
			List<Integer> questions = this.quizInterface.getQuestionsForQuiz(category, limit).getBody();
			Quiz quiz = new Quiz();
			quiz.setTitle(title);
			quiz.setQuestionIds(questions);
			
			return new ResponseEntity<Quiz>(this.quizDao.save(quiz), HttpStatus.CREATED);
		} catch (Exception e) {
			e.getStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
		try {
			Optional<Quiz> quiz = this.quizDao.findById(id);
			List<QuestionWrapper> questionsForUser = this.quizInterface.getQuestionsByIds(quiz.get().getQuestionIds()).getBody();
			return new ResponseEntity<List<QuestionWrapper>>(questionsForUser, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<Integer> submitQuiz(Integer id, List<Answer> answers) {
		return this.quizInterface.getScore(answers);
	}
}
