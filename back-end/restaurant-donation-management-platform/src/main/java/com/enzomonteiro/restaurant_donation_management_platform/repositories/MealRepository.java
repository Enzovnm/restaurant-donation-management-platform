package com.enzomonteiro.restaurant_donation_management_platform.repositories;

import com.enzomonteiro.restaurant_donation_management_platform.entities.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends JpaRepository<Meal,Long > {

}
