package com.enzomonteiro.restaurant_donation_management_platform.services;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantSaveDTO;
import com.enzomonteiro.restaurant_donation_management_platform.entities.Restaurant;
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

    @Transactional(readOnly = true)
    public List<RestaurantResponseDTO> findAll() {
        var result = restaurantRepository.findAll();
        return result.stream()
                .map(RestaurantMapper.restaurantMapper::restaurantToDto)
                .toList();
    }

    /* @Transactional
    public RestaurantResponseDTO save(RestaurantSaveDTO); */
}

