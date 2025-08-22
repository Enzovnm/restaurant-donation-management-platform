package com.enzomonteiro.restaurant_donation_management_platform.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "restaurants")
public class Restaurant {

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true, length = 320)
    private String email;

    @Column(unique = true, columnDefinition = "char(14)")
    private String cnpj;

    private String picture;

    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY)
    private Set<Meal> meals = new HashSet<>();

}
