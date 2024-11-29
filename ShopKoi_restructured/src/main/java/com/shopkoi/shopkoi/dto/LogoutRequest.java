package com.shopkoi.shopkoi.dto;


import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class LogoutRequest {
    private String token;
}
