package com.shopkoi.shopkoi.model.entity;

import com.shopkoi.shopkoi.Service.Right;
import com.shopkoi.shopkoi.Service.StaffSchedule;
import jakarta.persistence.*;
import jakarta.persistence.criteria.Order;
import lombok.*;

import java.util.List;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstname;
    private String email;

    // Các trường khác nếu cần
    private String phone;
    private String address;

    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "rightcustomer")
    private Right rightcustomer;


}
