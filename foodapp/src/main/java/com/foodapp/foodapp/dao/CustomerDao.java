package com.foodapp.foodapp.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.foodapp.foodapp.dto.Customer;
import com.foodapp.foodapp.repository.CustomerRepository;



@Repository
public class CustomerDao {

	@Autowired
	CustomerRepository customerRepository;
	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}


	

}