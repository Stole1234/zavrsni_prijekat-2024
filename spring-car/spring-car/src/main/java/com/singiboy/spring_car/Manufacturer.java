package com.singiboy.spring_car;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/* Getter and Setter setup*/

@Setter
@Getter
@Entity(name = "manufacturer")
public class Manufacturer {
    // Column setup
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "manufacturer_id")

    private Integer id;
    // column name
    @Column(nullable = false)
    private String name;
    // column country
    @Column(nullable = false)
    private String country;

    // Getters and Setters

}
