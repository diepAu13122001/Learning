package com.diep.QuizAppMonolithic.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.diep.QuizAppMonolithic.model.Question;

@Repository
public interface QuestionDao extends JpaRepository<Question, Integer> {

	List<Question> findByCategory(String category);

	List<Question> findByLevel(String level);

	Question findById(int id);

	static final String sql1 = "SELECT * FROM Question WHERE category= :category ORDER BY RAND() LIMIT :limit";

	@Query(value = sql1, nativeQuery = true)
	List<Question> findRandomQuestionsByCategory(String category, int limit);
}
