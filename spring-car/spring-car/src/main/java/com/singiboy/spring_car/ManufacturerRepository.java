package com.singiboy.spring_car;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, Integer> {
    List<Manufacturer> findByNameContaining(String manufacturer);
    List<Manufacturer> findByCountry(String country);
}
