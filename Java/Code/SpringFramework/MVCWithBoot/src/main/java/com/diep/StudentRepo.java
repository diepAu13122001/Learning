package com.diep;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.diep.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {
	List<Student> findAllByNameOrderByIdDesc(String name); // bat buoc phai goi dung ten thuoc tinh
	
	@Query("from Student where name like CONCAT('%',:keyword,'%')")
	List<Student> findAllByKeyword(@Param("keyword") String keyword);
}