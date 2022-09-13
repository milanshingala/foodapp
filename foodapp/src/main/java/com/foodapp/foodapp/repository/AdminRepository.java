package com.foodapp.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.Admin;



public interface AdminRepository extends JpaRepository<Admin, Integer> {

	public Admin findByEmailAndPassword(String email, String password);
	
}