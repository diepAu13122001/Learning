package com.diep.QuizService.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diep.QuizService.model.Quiz;

public interface QuizDao extends JpaRepository<Quiz, Integer>{

}
