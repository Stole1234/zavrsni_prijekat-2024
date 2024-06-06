package com.singiboy.spring_car;

/* repository is an interface that allows queries to be made over sql data base*/


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/*anotation of repository*/
@Repository

public interface CarRepository extends JpaRepository <Car, Integer> {

    List<Car> findAllByDeletedAtIsNull();
    Optional<Car> findByIdAndDeletedAtIsNull(Integer id);
    List<Car> findCarByModelContainsAndDeletedAtIsNull(String model);

    List<Car> findByYearAndDeletedAtIsNull(int year);





    }

