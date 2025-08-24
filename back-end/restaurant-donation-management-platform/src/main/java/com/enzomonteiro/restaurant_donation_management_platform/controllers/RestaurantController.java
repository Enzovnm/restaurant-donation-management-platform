package com.enzomonteiro.restaurant_donation_management_platform.controllers;

import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantResponseDTO;
import com.enzomonteiro.restaurant_donation_management_platform.dtos.RestaurantSaveDTO;
import com.enzomonteiro.restaurant_donation_management_platform.services.RestaurantService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping
    public ResponseEntity<List<RestaurantResponseDTO>> findAll() {
        return ResponseEntity.ok(restaurantService.findAll());
    }


    @PostMapping
    public ResponseEntity<RestaurantResponseDTO> save(@Valid @RequestBody RestaurantSaveDTO restaurant){
        return new ResponseEntity<RestaurantResponseDTO>(restaurantService.save(restaurant), HttpStatus.CREATED);
    }

}
