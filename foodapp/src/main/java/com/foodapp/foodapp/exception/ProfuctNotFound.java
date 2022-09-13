package com.foodapp.foodapp.exception;

public class ProductNotFound extends RuntimeException {
    String message="Product Not Available";
    @Override
    public String getMessage() {

        return message;
    }

}