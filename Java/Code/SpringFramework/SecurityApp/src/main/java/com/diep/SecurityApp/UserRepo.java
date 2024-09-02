package com.diep.SecurityApp;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
	public User findByUsername(String username);
}
