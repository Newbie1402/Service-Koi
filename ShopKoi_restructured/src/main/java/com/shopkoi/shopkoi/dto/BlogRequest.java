package com.shopkoi.shopkoi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BlogRequest {
    // Getters và Setters
    private String blogTitle;
    private String blogContent;
    private Long blogSlugId;
    private String blogimage;

}
