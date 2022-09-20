package com.foodapp.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.BranchManager;



public interface BranchManagerRepository extends JpaRepository<BranchManager, Integer> {

	public BranchManager findByEmailAndPassword(String email, String password);

}

