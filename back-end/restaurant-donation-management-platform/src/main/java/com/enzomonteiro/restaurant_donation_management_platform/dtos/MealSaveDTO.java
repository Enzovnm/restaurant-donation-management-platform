package com.enzomonteiro.restaurant_donation_management_platform.dtos;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record MealSaveDTO(
        @NotEmpty(message = "The field 'name' must not be empty ")
        String name,

        @NotEmpty(message = "The field 'description' must not be empty ")
        String description,

        @NotNull(message = "The field 'restaurant_id' must not be empty ")
        Long restaurant_id
) {
}
