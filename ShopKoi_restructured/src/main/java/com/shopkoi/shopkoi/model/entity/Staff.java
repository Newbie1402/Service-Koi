
package com.shopkoi.shopkoi.model.entity;

import com.shopkoi.shopkoi.Service.Right;
import com.shopkoi.shopkoi.Service.StaffSchedule;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "staff")
public class Staff {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String staffname;


    @Column(nullable = false)
    @NotNull(message = "Email cannot be null")
    private String staffemail;

    @Column(nullable = false)
    @NotNull(message = "Phone number cannot be null")
    private String staffphone;

    private String staffadress;

    @ElementCollection(targetClass = StaffSchedule.class)
    @Enumerated(EnumType.STRING)
    @Column(name = "staffschedule")
    private Set<StaffSchedule> staffschedule;


    @Column(nullable = false)
    @NotNull(message = "Phone number cannot be null")
    private String staffpassword;

    private String profilephoto;

    @Enumerated(EnumType.STRING)
    @Column(name = "rightstaff")
    private Right rightstaff;

}

