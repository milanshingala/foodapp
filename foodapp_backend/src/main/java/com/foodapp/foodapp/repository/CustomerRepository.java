package com.foodapp.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.Customer;



public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}