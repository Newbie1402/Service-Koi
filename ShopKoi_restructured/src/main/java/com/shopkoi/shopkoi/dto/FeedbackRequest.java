package com.shopkoi.shopkoi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FeedbackRequest {
    private Long bookingid;
    private Long customerid;
    private Long staffid;
    private int rating;
    private String comment;



}
