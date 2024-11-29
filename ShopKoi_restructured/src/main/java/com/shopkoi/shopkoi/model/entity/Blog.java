package com.shopkoi.shopkoi.model.entity;


import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter

@NoArgsConstructor
@Entity
@Table(name = "Blog")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long BlogId;

    private String BlogTitle;

    private String BlogContent;

    @ManyToOne
    @JoinColumn(name = "blog_slug_id")
    private BlogSlug blogSlug;

    private String blogimage;


    public Blog(String blogTitle, String blogContent, BlogSlug blogSlug, String blogimage) {
        BlogTitle = blogTitle;
        BlogContent = blogContent;
        this.blogSlug = blogSlug;
        this.blogimage = blogimage;
    }
}
