package com.enzomonteiro.restaurant_donation_management_platform.exceptions;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
public class DefaultError {

    private Instant timestamp;

    private Integer status;

    private String error;

    private String message;

    private String path;
}
;