package com.enzomonteiro.restaurant_donation_management_platform.mappers;


import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.entities.Restaurant;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

    RestaurantMapper restaurantMapper = Mappers.getMapper(RestaurantMapper.class);

    RestaurantResponseDTO restaurantToDto(Restaurant restaurant);
}
