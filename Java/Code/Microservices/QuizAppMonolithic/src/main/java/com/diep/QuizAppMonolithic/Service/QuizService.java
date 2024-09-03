package com.diep.QuizAppMonolithic.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;

import com.diep.QuizAppMonolithic.Answer.Answer;
import com.diep.QuizAppMonolithic.DAO.*;
import com.diep.QuizAppMonolithic.model.*;

@Service
public class QuizService {
	@Autowired
	QuizDao quizDao;

	@Autowired
	QuestionDao questionDao;

	public ResponseEntity<Quiz> createQuiz(String category, int limit, String title) {
		try {
			Quiz quiz = new Quiz();
			quiz.setTitle(title);
			List<Question> questions = this.questionDao.findRandomQuestionsByCategory(category, limit);
			quiz.setQuestions(questions);
			return new ResponseEntity<Quiz>(this.quizDao.save(quiz), HttpStatus.CREATED);
		} catch (Exception e) {
			e.getStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
		try {
			Optional<Quiz> quiz = this.quizDao.findById(id);
			List<Question> questionsFromDB = quiz.get().getQuestions();
			List<QuestionWrapper> questionsForUser = new ArrayList<QuestionWrapper>();
			for (Question question : questionsFromDB) {
				questionsForUser.add(new QuestionWrapper(question));
			}
			return new ResponseEntity<List<QuestionWrapper>>(questionsForUser, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<String> submitQuiz(Integer id, List<Answer> answers) {
		try {
			Quiz quiz = this.quizDao.findById(id).get();
			List<Question> questions = quiz.getQuestions();
			int question_number = questions.size();
			int point = 0;
			for (Question question : questions) {
				for (Answer answer : answers) {
					if (question.getId() == answer.getQuestion_id()) {
						if (question.getRight_answer().equals(answer.getResponse())) {
							point++;
						}
					}
				}
			}
			return new ResponseEntity<String>(point + "/" + question_number, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}
}
