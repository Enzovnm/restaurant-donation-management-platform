package com.enzomonteiro.restaurant_donation_management_platform.repositories;

import com.enzomonteiro.restaurant_donation_management_platform.entities.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long > {

    Optional<Restaurant> findByEmail(String email);

    Optional<Restaurant> findByCnpj(String cnpj);
}
