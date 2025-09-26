package com.enzomonteiro.restaurant_donation_management_platform.mappers;


import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantSaveDTO;
import com.enzomonteiro.restaurant_donation_management_platform.entities.Restaurant;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = MealMapper.class)
public interface RestaurantMapper {

    RestaurantResponseDTO restaurantToDto(Restaurant restaurant);

    Restaurant restaurantSaveDTOToRestaurant(RestaurantSaveDTO restaurantSaveDTO);
}
