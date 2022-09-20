package com.foodapp.foodapp.exception;

public class Item extends RuntimeException {
	
	String message="Not Available";
	
	@Override
	public String getMessage() {
		return message;
	}

}