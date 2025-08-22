package com.enzomonteiro.restaurant_donation_management_platform.services;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.MealResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.mappers.MealMapper;
import com.enzomonteiro.restaurant_donation_management_platform.repositories.MealRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MealService {

    private final MealRepository mealRepository;

    public List<MealResponseDTO> findAll() {
        var result = mealRepository.findAll();
        return result.stream().map(MealMapper.mealMapper::mealToDto).toList();
    }
}
