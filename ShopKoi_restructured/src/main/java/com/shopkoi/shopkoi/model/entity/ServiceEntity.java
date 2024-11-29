package com.shopkoi.shopkoi.model.entity;

import com.shopkoi.shopkoi.Service.ServiceStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "services")
public class ServiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nameservice")
    private String nameservice;

    @Column(name = "productcode")
    private String productcode;

    @Column(name = "price")
    private Double price;

    @Column(name = "summary")
    private String summary;

    @Column(name = "content")
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private ServiceStatus status;

    // Thêm thuộc tính imagePath để lưu đường dẫn ảnh
    @Column(name = "image_path")
    private String imagePath;

    // Getters và Setters

}
