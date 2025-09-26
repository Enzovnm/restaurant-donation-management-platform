package com.enzomonteiro.restaurant_donation_management_platform.services;

import com.enzomonteiro.restaurant_donation_management_platform.repositories.RestaurantRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;

class RestaurantServiceTest {


    @Mock
    private RestaurantRepository restaurantRepository;

    @Autowired
    @InjectMocks
    private RestaurantService restaurantService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    @DisplayName("Should create restaurant when everything is okay")
    void save() {
    }
}