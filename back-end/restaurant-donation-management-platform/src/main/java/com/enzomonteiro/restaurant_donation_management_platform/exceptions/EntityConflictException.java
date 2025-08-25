package com.enzomonteiro.restaurant_donation_management_platform.exceptions;

public class EntityConflictException extends RuntimeException {
    public EntityConflictException(String message){
        super(message);
    }
}
