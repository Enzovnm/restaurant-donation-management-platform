package com.enzomonteiro.restaurant_donation_management_platform.infra;

import com.enzomonteiro.restaurant_donation_management_platform.exceptions.DefaultError;
import com.enzomonteiro.restaurant_donation_management_platform.exceptions.EntityConflictException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatusCode status,
            WebRequest request) {

        DefaultError err = new DefaultError();
        err.setTimestamp(Instant.now());
        err.setStatus(HttpStatus.UNPROCESSABLE_ENTITY.value());
        err.setError("Resource is invalid");
        err.setMessage(ex.getBindingResult().getFieldError().getDefaultMessage());
        err.setPath(request.getDescription(false).replace("uri=", ""));

        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(err);
    }

    @ExceptionHandler(EntityConflictException.class)
    public ResponseEntity<DefaultError> handleEntityConflictException(EntityConflictException e, HttpServletRequest request){

        DefaultError err = new DefaultError();
        err.setTimestamp(Instant.now());
        err.setStatus(HttpStatus.CONFLICT.value());
        err.setError("Resource has a conflict");
        err.setMessage(e.getMessage());
        err.setPath(request.getRequestURI());

        return ResponseEntity.status(HttpStatus.CONFLICT.value()).body(err);
    }

}
