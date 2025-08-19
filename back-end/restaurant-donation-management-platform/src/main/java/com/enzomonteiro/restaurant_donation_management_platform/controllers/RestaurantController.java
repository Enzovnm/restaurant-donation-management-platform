package com.enzomonteiro.restaurant_donation_management_platform.controllers;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.services.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/restaurants")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping
    public ResponseEntity<List<RestaurantResponseDTO>> findAll() {
        return ResponseEntity.ok(restaurantService.findAll());
    }
}
