package com.foodapp.foodapp.exception;

public class Menu extends RuntimeException {
	String message="Menu Not Available";
	public String getMessage() {
		return message;
	}

}
