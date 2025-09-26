package com.enzomonteiro.restaurant_donation_management_platform.services;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.MealResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.dtos.MealSaveDTO;
import com.enzomonteiro.restaurant_donation_management_platform.entities.Meal;
import com.enzomonteiro.restaurant_donation_management_platform.entities.Restaurant;
import com.enzomonteiro.restaurant_donation_management_platform.exceptions.EntityNotFoundException;
import com.enzomonteiro.restaurant_donation_management_platform.mappers.MealMapper;
import com.enzomonteiro.restaurant_donation_management_platform.repositories.MealRepository;
import com.enzomonteiro.restaurant_donation_management_platform.repositories.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MealService {

    private final MealRepository mealRepository;

    private final RestaurantRepository restaurantRepository;

    private final MealMapper mealMapper;

    public List<MealResponseDTO> findAll() {
        var result = mealRepository.findAll();
        return result.stream().map(mealMapper::mealToDto).toList();
    }

    public MealResponseDTO save(MealSaveDTO meal) {
        Restaurant restaurant = restaurantRepository.findById(meal.restaurant_id()).orElseThrow(() -> new EntityNotFoundException("Restaurante não encontrado"));

        Meal mealEntity = mealMapper.mealSaveDtoToMeal(meal);
        mealEntity.setRestaurant(restaurant);

        var mealSaved = mealRepository.save(mealEntity);

        return mealMapper.mealToDto(mealSaved);
    }
}
