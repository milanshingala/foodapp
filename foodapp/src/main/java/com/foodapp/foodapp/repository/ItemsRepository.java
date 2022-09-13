package com.foodapp.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.Item;



public interface ItemsRepository extends JpaRepository<Item, Integer> {

}
