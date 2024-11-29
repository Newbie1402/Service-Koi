package com.shopkoi.shopkoi.controller;


import com.shopkoi.shopkoi.Service.BlogSlugService;
import com.shopkoi.shopkoi.model.entity.BlogSlug;
import com.shopkoi.shopkoi.repository.BlogSlugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogslug")
public class BlogSlugController {
    @Autowired private BlogSlugService blogSlugService;

    @Autowired private BlogSlugRepository blogSlugRepository;

    @GetMapping
    public List<BlogSlug> getBlogSlug() {
        return blogSlugService.findAll();
    }


    // Thêm role mới (POST)
    @PostMapping("/create")
    public ResponseEntity<BlogSlug> createRole(@RequestBody BlogSlug blogSlug) {
        BlogSlug newblogSlug = blogSlugRepository.save(blogSlug);
        return ResponseEntity.status(HttpStatus.CREATED).body(newblogSlug);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<BlogSlug> updateBlogSlug(@PathVariable Long id, @RequestBody BlogSlug blogSlug) {
        try {
            BlogSlug updatedBlogSlug = blogSlugService.updateBlogSlug(id, blogSlug.getTitle(), blogSlug.getDescription());
            return ResponseEntity.ok(updatedBlogSlug);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Trả về 404 nếu không tìm thấy
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBlogSlug(@PathVariable Long id) {
        try {
            blogSlugService.deleteBlogSlug(id);
            return ResponseEntity.noContent().build(); // Trả về 204 No Content nếu xóa thành công
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Trả về 404 nếu không tìm thấy
        }
    }

}
