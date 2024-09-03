package com.diep.QuestionService.model;


import lombok.*;

@Data
@AllArgsConstructor
public class Answer {
	private int question_id;
	private String response;
}
