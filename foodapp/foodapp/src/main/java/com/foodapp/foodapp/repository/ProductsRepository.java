package com.foodapp.foodapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodapp.foodapp.dto.Products;



public interface ProductsRepository extends JpaRepository<Products, Integer> {

}
