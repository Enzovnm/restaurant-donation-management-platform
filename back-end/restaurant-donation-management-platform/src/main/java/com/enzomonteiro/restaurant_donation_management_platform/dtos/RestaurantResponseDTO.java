package com.enzomonteiro.restaurant_donation_management_platform.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.br.CNPJ;

public record RestaurantResponseDTO(
        String name,

        String email,

        String cnpj,

        String picture
) {}
