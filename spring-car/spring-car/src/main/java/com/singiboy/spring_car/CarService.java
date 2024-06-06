package com.singiboy.spring_car;



import com.singiboy.spring_car.model.CarModelSave;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
@NoArgsConstructor
@Getter
@Setter
@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;
    @Autowired
    public ManufacturerRepository manufacturerRepository;
    @Autowired
    private OwnerRepository ownerRepository;

    public List<Car> findAll() {
        return carRepository.findAllByDeletedAtIsNull();
    }

    public Optional<Car>getCarById(int id) {
        return carRepository.findByIdAndDeletedAtIsNull(id);
    }

    public List<Car> findCarByModel(String model) {
        return carRepository.findCarByModelContainsAndDeletedAtIsNull(model);
    }

    public List<Car> findByYear(int year) {
        return carRepository.findByYearAndDeletedAtIsNull(year);
    }

    public List<Manufacturer> getAllManufacturer() {
        return manufacturerRepository.findAll();
    }

    public List<Manufacturer> findByName(String manufacturer) {
        return manufacturerRepository.findByNameContaining(manufacturer);
    }
    List<Manufacturer> findByCountry(String country) {
        return manufacturerRepository.findByCountry(country);
    }

    List<Owner> findByOwnerName(String ownerName) {
        return ownerRepository.findByOwnerName(ownerName);
    }


    public Car createCar(CarModelSave modelSave) {
        Car car = new Car();
        car.setModel(modelSave.getModel());
        car.setYear(modelSave.getYear());
        car.setCreatedAt(LocalDateTime.now());
        return carRepository.save(car);
    }

    public Car updateCar(Integer id, CarModelSave modelSave) {
        Car car = carRepository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        car.setModel(modelSave.getModel());
        car.setYear(modelSave.getYear());
        car.setUpdatedAt(LocalDateTime.now());
        return carRepository.save(car);
    }

     public void deletedCar(Integer id) {
        Car car = carRepository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        car.setDeletedAt(LocalDateTime.now());
        carRepository.save(car);
     }
}