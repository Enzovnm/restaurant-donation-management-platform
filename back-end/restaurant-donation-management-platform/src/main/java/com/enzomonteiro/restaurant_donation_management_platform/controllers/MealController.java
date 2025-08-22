package com.enzomonteiro.restaurant_donation_management_platform.controllers;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.MealResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.services.MealService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/meals")
@RequiredArgsConstructor
public class MealController {

    private final MealService mealService;

    @GetMapping
    public ResponseEntity<List<MealResponseDTO>> findAll() {
        return ResponseEntity.ok(mealService.findAll());
    }


}
