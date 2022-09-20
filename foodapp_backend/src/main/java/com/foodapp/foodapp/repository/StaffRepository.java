package com.foodapp.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.Staff;



public interface StaffRepository extends JpaRepository<Staff, Integer> {

	public Staff findByEmailAndPassword(String email, String password);

}
