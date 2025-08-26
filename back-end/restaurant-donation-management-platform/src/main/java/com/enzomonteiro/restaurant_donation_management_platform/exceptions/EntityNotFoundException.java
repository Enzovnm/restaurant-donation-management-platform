package com.enzomonteiro.restaurant_donation_management_platform.exceptions;

public class EntityNotFoundException extends RuntimeException {
    public EntityNotFoundException(String message) {
        super(message);
    }
}
