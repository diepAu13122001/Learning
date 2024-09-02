package com.diep.QuizAppMonolithic.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.diep.QuizAppMonolithic.model.Question;

@Repository
public interface QuestionDao extends JpaRepository<Question, Integer> {

}
