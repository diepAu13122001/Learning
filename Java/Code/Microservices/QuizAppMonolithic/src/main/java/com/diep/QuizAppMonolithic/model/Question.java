package com.diep.QuizAppMonolithic.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "question")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@ToString
@Data
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private int id;

	private String category;

	private String level;

	private String title;

	private String right_answer;

	private String option1;

	private String option2;

	private String option3;
	
	private String option4;

}
