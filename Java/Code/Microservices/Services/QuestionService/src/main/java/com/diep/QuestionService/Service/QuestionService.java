package com.diep.QuestionService.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;

import com.diep.QuestionService.DAO.QuestionDao;
import com.diep.QuestionService.model.Answer;
import com.diep.QuestionService.model.Question;
import com.diep.QuestionService.model.QuestionWrapper;

@Service
public class QuestionService {
	@Autowired
	QuestionDao questionDao;

	public ResponseEntity<List<Question>> getAllQuestions() {
		try {
			return new ResponseEntity<List<Question>>(this.questionDao.findAll(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<Question> getQuestionById(int id) {
		try {
			return new ResponseEntity<Question>(this.questionDao.findById(id), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<Question> addQuestion(Question question) {
		try {
			return new ResponseEntity<Question>(this.questionDao.save(question), HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<Boolean> deleteQuestion(int id) {
		try {
			this.questionDao.deleteById(id);
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Boolean>(false, HttpStatus.BAD_REQUEST);

	}

	public ResponseEntity<List<Question>> getQuestionsByCategory(String category) {
		try {
			return new ResponseEntity<List<Question>>(this.questionDao.findByCategory(category), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<List<Question>> getQuestionsByLevel(String level) {
		try {
			return new ResponseEntity<List<Question>>(this.questionDao.findByLevel(level), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);

	}

	public ResponseEntity<Question> updateQestion(Question question) {
		try {
			Question new_question = this.questionDao.findById(question.getId());
			new_question.setCategory(question.getCategory());
			new_question.setLevel(question.getLevel());
			new_question.setOption1(question.getOption1());
			new_question.setOption2(question.getOption2());
			new_question.setOption3(question.getOption3());
			new_question.setOption4(question.getOption4());
			new_question.setRight_answer(question.getRight_answer());
			new_question.setTitle(question.getTitle());
			return new ResponseEntity<Question>(this.questionDao.save(new_question), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<String> addQuestions(List<Question> questions) {
		try {
			this.questionDao.saveAll(questions);
			return new ResponseEntity<String>("successfully!", HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<String>("Error", HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<List<Integer>> getQuestionsForQuiz(String category, int limit) {
		try {
			List<Integer> questionIds = this.questionDao.findRandomQuestionsByCategory(category, limit);
			return new ResponseEntity<List<Integer>>(questionIds, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<List<QuestionWrapper>> getQuestionsByIds(List<Integer> questionIds) {
		try {
			List<QuestionWrapper> questionWrappers = new ArrayList<QuestionWrapper>();
			for (Integer id : questionIds) {
				questionWrappers.add(new QuestionWrapper(this.questionDao.findById(id).get()));
			}
			return new ResponseEntity<List<QuestionWrapper>>(questionWrappers, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

	}

	public ResponseEntity<Integer> getScore(List<Answer> answers) {
		try {
			int point = 0;
			for (Answer answer : answers) {
				Question question = this.questionDao.findById(answer.getQuestion_id());
				if (question.getRight_answer().equals(answer.getResponse())) {
					point++;
				}
			}
			return new ResponseEntity<Integer>(point, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	}
}
