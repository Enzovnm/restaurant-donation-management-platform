package com.enzomonteiro.restaurant_donation_management_platform.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.br.CNPJ;

public record RestaurantSaveDTO(
        @NotEmpty(message = "The field 'name' must not be empty")
        String name,

        @NotEmpty(message = "The field 'email' must not be empty")
        @Email(message = "The field 'email' is not valid")
        String email,

        @NotEmpty(message = "The field 'cnpj' must not be empty")
        @CNPJ(message = "The field 'cnpj' is invalid")
        String cnpj,

        String picture
) {}
