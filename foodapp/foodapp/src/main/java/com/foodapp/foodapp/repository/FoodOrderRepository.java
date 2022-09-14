package com.foodapp.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.FoodOrder;



public interface FoodOrderRepository extends JpaRepository<FoodOrder, Integer> {

}
