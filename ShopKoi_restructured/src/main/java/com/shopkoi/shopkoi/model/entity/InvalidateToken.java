package com.shopkoi.shopkoi.model.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Builder
public class InvalidateToken {
    @Id
    String id;
    Date experiedTime;
}
