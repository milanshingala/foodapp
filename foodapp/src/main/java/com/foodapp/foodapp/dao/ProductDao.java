package com.foodapp.foodapp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.foodapp.foodapp.dto.Products;
import com.foodapp.foodapp.repository.ProductsRepository;



@Repository
public class ProductDao {

	@Autowired
	ProductsRepository productsRepository;
	
	public Products saveProducts(Products products) {
		return productsRepository.save(products);
	}
	
	public Optional<Products> getby(int id){
		return productsRepository.findById(id);
	}
	
	public Products delete(int id) {
		Products products=getby(id).get();
		productsRepository.delete(products);
		return products;
	}
	public Products update(Products products, int id) {
		products.setId(id);
		return productsRepository.save(products);
	}
	public List<Products> getall(){
		return productsRepository.findAll();
	}
	
}
