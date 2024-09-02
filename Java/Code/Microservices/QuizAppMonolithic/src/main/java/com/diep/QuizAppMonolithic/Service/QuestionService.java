package com.diep.QuizAppMonolithic.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.diep.QuizAppMonolithic.DAO.QuestionDao;
import com.diep.QuizAppMonolithic.model.Question;

@Service
public class QuestionService {
	@Autowired
	QuestionDao questionDao;

	public List<Question> getAllQuestions() {
		return this.questionDao.findAll();
	}

	public Question addQuestion(Question question) {
		return this.questionDao.save(question);
	}

	public void deleteQuestion(int id) {
		this.questionDao.deleteById(id);
	}

}
