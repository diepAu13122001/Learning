package com.diep.QuizAppMonolithic.model;

import lombok.Data;

@Data
public class QuestionWrapper {

	private int id;

	private String title;

	private String option1;

	private String option2;

	private String option3;

	private String option4;

	public QuestionWrapper(Question question) {
		this.id = question.getId();
		this.title = question.getTitle();
		this.option1 = question.getOption1();
		this.option2 = question.getOption2();
		this.option3 = question.getOption3();
		this.option4 = question.getOption4();
	}
}
