package com.shopkoi.shopkoi.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "BlogSlug")
public class BlogSlug {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long BlogSlugId;

    private String Title;

    private String Description;

    @OneToMany(mappedBy = "blogSlug", cascade = CascadeType.REMOVE)
    private List<Blog> blogs;

    public BlogSlug(Long blogSlugId, String title, String description) {
        BlogSlugId = blogSlugId;
        Title = title;
        Description = description;
    }

    public BlogSlug() {}
}