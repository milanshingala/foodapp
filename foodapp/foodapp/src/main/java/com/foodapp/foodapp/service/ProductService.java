package com.foodapp.foodapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.foodapp.foodapp.exception.ProductNotFound;
import com.foodapp.foodapp.dao.ProductDao;
import com.foodapp.foodapp.dto.Products;
import com.foodapp.foodapp.responseStructure.ResponseStructure;


@Service
public class ProductService {

    @Autowired
    ProductDao productDao;
    public ResponseEntity<ResponseStructure<Products>> saveProducts(Products products) {
        ResponseStructure<Products> responseStructure = new ResponseStructure<>();
        responseStructure.setMessage("Saved Successfully");
        responseStructure.setStatuscode(HttpStatus.CREATED.value());
        responseStructure.setT(productDao.saveProducts(products));
        return new ResponseEntity<ResponseStructure<Products>>(responseStructure, HttpStatus.CREATED);
    }
    public ResponseEntity<ResponseStructure<Products>> getby(int id) {
        Optional<Products> products = productDao.getby(id);
        ResponseStructure<Products> responseStructure = new ResponseStructure<>();
        if (products.isEmpty()) {
            throw new ProductNotFound();
        } else {
            responseStructure.setMessage("Found Successfully");
            responseStructure.setStatuscode(HttpStatus.OK.value());
            responseStructure.setT(products.get());
            return new ResponseEntity<ResponseStructure<Products>>(responseStructure, HttpStatus.OK);
        }

    }
    public ResponseEntity<ResponseStructure<Products>> delete(int id) {
        Optional<Products> products = productDao.getby(id);
        ResponseStructure<Products> responseStructure = new ResponseStructure<>();
        if (products.isEmpty()) {
            throw new ProductNotFound();
        } else {
            responseStructure.setMessage("deleted Successfully");
            responseStructure.setStatuscode(HttpStatus.OK.value());
            responseStructure.setT(productDao.delete(id));
            return new ResponseEntity<ResponseStructure<Products>>(responseStructure, HttpStatus.OK);
        }

    }
    public ResponseEntity<ResponseStructure<Products>> update(Products products, int id) {
        Optional<Products> products2 = productDao.getby(id);
        ResponseStructure<Products> responseStructure = new ResponseStructure<>();
        if (products2.isEmpty()) {
            throw new ProductNotFound();
        } else {
            responseStructure.setMessage("updated Successfully");
            responseStructure.setStatuscode(HttpStatus.OK.value());
            responseStructure.setT(productDao.update(products, id));
            return new ResponseEntity<ResponseStructure<Products>>(responseStructure, HttpStatus.OK);
        }

    }
    public ResponseEntity<ResponseStructure<List<Products>>> getall() {
        ResponseStructure<List<Products>> responseStructure = new ResponseStructure<List<Products>>();
        responseStructure.setMessage("Found all");
        responseStructure.setStatuscode(HttpStatus.OK.value());
        responseStructure.setT(productDao.getall());
        return new ResponseEntity<ResponseStructure<List<Products>>>(responseStructure, HttpStatus.CREATED);
    }
}