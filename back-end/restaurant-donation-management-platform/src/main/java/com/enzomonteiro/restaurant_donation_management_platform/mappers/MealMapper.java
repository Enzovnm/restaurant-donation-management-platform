package com.enzomonteiro.restaurant_donation_management_platform.mappers;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.MealResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.entities.Meal;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MealMapper {

    MealMapper mealMapper = Mappers.getMapper(MealMapper.class);

    MealResponseDTO mealToDto(Meal meal);
}
