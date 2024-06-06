package com.singiboy.spring_car;
import com.singiboy.spring_car.model.CarModelSave;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

//Enable Cross Origin
@CrossOrigin
@RestController
//Maping setup
@RequestMapping(path = "/car")
@RequiredArgsConstructor

public class CarController {

    private final CarRepository carRepository;
    private final ManufacturerRepository manufacturerRepository;
    private final OwnerRepository ownerRepository;
    private final CarService carService;

    //for car
    @GetMapping
    public List<Car> getAllCars(){

        return carRepository.findAllByDeletedAtIsNull();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity <Car> findCarById(@PathVariable Integer id){
        return ResponseEntity.of(carRepository.findByIdAndDeletedAtIsNull(id));
    }

    @GetMapping(path = "/model/{model}")
    public List<Car> findCarByModel(@PathVariable String model){
        return carService.getCarRepository().findCarByModelContainsAndDeletedAtIsNull(model);
    }

    @GetMapping(path = "/year/{year}")
    public List<Car> findCarByYear(@PathVariable int year){
        return carService.getCarRepository().findByYearAndDeletedAtIsNull(year);
    }

    public List<Manufacturer> getAllManufacturer(){

        return manufacturerRepository.findAll();
    }
    public List<Owner> getAllOwner(){

        return ownerRepository.findAll();
    }

    @GetMapping("/manufacturer")
    public List<Manufacturer> findByManufacturer(@RequestParam String manufacturer) {
        return manufacturerRepository.findByNameContaining(manufacturer);
    }

    @GetMapping("/owner")
    public List<Owner> findByOwner(@RequestParam String ownerName) {
        return ownerRepository.findByOwnerName(ownerName);
    }


    @GetMapping("/country")
    public List<Manufacturer> findByCountry(@RequestParam String country) {
        return manufacturerRepository.findByCountry(country);
    }

    // Edit, delete with time

    @PostMapping
    public Car createCar(@RequestBody CarModelSave car) {
        return carService.createCar(car);
    }

    @PutMapping(path = "/{id}")
    public Car updateCar(@PathVariable Integer id, @RequestBody CarModelSave car) {
        return carService.updateCar(id, car);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deletedCar(@PathVariable Integer id) {
        carService.deletedCar(id);
    }

}




