package com.diep.QuizAppMonolithic.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diep.QuizAppMonolithic.model.Quiz;

public interface QuizDao extends JpaRepository<Quiz, Integer>{

}
