package com.diep.QuizAppMonolithic.model;

import java.io.Serializable;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "question")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
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

//	public Question(int id, String category, String level, String title, String right_answer, String option1,
//			String option2, String option3) {
//		this.id = id;
//		this.category = category;
//		this.level = level;
//		this.title = title;
//		this.right_answer = right_answer;
//		this.option1 = option1;
//		this.option2 = option2;
//		this.option3 = option3;
//	}
//
//	public Question() {
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getCategory() {
//		return category;
//	}
//
//	public void setCategory(String category) {
//		this.category = category;
//	}
//
//	public String getLevel() {
//		return level;
//	}
//
//	public void setLevel(String level) {
//		this.level = level;
//	}
//
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public String getRight_answer() {
//		return right_answer;
//	}
//
//	public void setRight_answer(String right_answer) {
//		this.right_answer = right_answer;
//	}
//
//	public String getOption1() {
//		return option1;
//	}
//
//	public void setOption1(String option1) {
//		this.option1 = option1;
//	}
//
//	public String getOption2() {
//		return option2;
//	}
//
//	public void setOption2(String option2) {
//		this.option2 = option2;
//	}
//
//	public String getOption3() {
//		return option3;
//	}
//
//	public void setOption3(String option3) {
//		this.option3 = option3;
//	}
//
//	@Override
//	public String toString() {
//		return "Question [id=" + id + ", category=" + category + ", level=" + level + ", title=" + title
//				+ ", right_answer=" + right_answer + ", option1=" + option1 + ", option2=" + option2 + ", option3="
//				+ option3 + "]";
//	}

}
