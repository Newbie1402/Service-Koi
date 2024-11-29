package com.shopkoi.shopkoi.dto.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomerResponse {
    private String customerName;
    private String customerEmail;
    private String customerPhone;
    private String customerAddress;
    private String customerRight;
}
