package com.enzomonteiro.restaurant_donation_management_platform.services;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantSaveDTO;
import com.enzomonteiro.restaurant_donation_management_platform.entities.Restaurant;
import com.enzomonteiro.restaurant_donation_management_platform.exceptions.EntityConflictException;
import com.enzomonteiro.restaurant_donation_management_platform.mappers.RestaurantMapper;
import com.enzomonteiro.restaurant_donation_management_platform.repositories.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;
    private final RestaurantMapper restaurantMapper;

    @Transactional(readOnly = true)
    public List<RestaurantResponseDTO> findAllWithMeals() {
        var result = restaurantRepository.findAllWithMeals();
        return result.stream()
                .map(restaurantMapper::restaurantToDto)
                .toList();
    }

    @Transactional
    public RestaurantResponseDTO upsert(RestaurantSaveDTO restaurant) {

        Restaurant restaurantToSave = restaurantRepository.findByEmail(restaurant.email())
                .map(restaurantFound -> {
                    restaurantFound.setName(restaurant.name());
                    restaurantFound.setEmail(restaurant.email());
                    restaurantFound.setPicture(restaurant.picture());
                    restaurantFound.setCnpj(restaurant.cnpj());
                    return restaurantFound;
                })
                .orElse(restaurantMapper.restaurantSaveDTOToRestaurant(restaurant));

        restaurantRepository.findByCnpj(restaurant.cnpj()).ifPresent(existingCnpj -> {
            if (restaurantToSave.getId() == null || !existingCnpj.getId().equals(restaurantToSave.getId())) {
                throw new EntityConflictException("CNPJ já existe: " + restaurant.cnpj());
            }
        });

        var result = restaurantRepository.save(restaurantToSave);

        return restaurantMapper.restaurantToDto(result);
    }
}

