package com.enzomonteiro.restaurant_donation_management_platform.controllers;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.MealResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.dtos.MealSaveDTO;
import com.enzomonteiro.restaurant_donation_management_platform.entities.Restaurant;
import com.enzomonteiro.restaurant_donation_management_platform.services.MealService;
import com.enzomonteiro.restaurant_donation_management_platform.services.RestaurantService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<MealResponseDTO> save(@Valid @RequestBody MealSaveDTO meal){
        return new ResponseEntity<MealResponseDTO>(mealService.save(meal),HttpStatus.CREATED);
    }


}
