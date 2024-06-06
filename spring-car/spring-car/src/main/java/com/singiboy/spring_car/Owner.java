package com.singiboy.spring_car;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity(name = "owner")
/* Getter and Setter setup*/

@Getter
@Setter
public class Owner {

   /* ID setup */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "owner_id")

    private Long id;



    /* Name, Surname, Email, Column and Created_at setup*/
    @Column(nullable = false)
    private String ownerName;

    @Column(nullable = false)
    private String surname;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String phone;


}
