package com.foodapp.foodapp.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.Menu;



public interface MenuRepository extends JpaRepository<Menu, Integer> {

}