package com.foodapp.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.Branch;



public interface BranchRepository extends JpaRepository<Branch, Integer> {

}
