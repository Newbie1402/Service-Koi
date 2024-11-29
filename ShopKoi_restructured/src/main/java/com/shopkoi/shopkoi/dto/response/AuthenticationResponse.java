package com.shopkoi.shopkoi.dto.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthenticationResponse {
    private Long Id;
    private String Name;
    private String Phone;
    private String Email;
    private String Address;
    public String token;
    private String imgpath;


}
