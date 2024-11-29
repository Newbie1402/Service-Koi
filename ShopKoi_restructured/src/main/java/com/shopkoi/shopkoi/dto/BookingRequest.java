
package com.shopkoi.shopkoi.dto;

import com.shopkoi.shopkoi.Service.PaymentMethod;
import com.shopkoi.shopkoi.model.entity.Medicine;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Setter
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class BookingRequest {
    private Long customerId;
    private Long staffId;
    private Long serviceId;
    private String bookingDate;
    private String bookingDetail;
    private Double distance;
    private PaymentMethod paymentMethod;

    private Set<Long> medicalid;

    private Long totalprice;

    private boolean paymentstatus;
}

