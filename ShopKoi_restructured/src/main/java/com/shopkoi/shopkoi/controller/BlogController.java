package com.shopkoi.shopkoi.controller;

import com.shopkoi.shopkoi.Service.BlogService;
import com.shopkoi.shopkoi.Service.FeedbackService;
import com.shopkoi.shopkoi.dto.BlogRequest;
import com.shopkoi.shopkoi.dto.FeedbackRequest;
import com.shopkoi.shopkoi.model.entity.*;
import com.shopkoi.shopkoi.repository.BlogRepository;
import com.shopkoi.shopkoi.repository.BlogSlugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog")
public class BlogController {

    @Autowired private BlogService blogService;

    @Autowired private BlogRepository blogRepository;

    @Autowired private BlogSlugRepository blogSlugRepository;

    //in ra tat ca
    @GetMapping
    public ResponseEntity<List<Blog>> getAllBlog() {
        List<Blog> blogs = blogService.ListAll();
        return ResponseEntity.ok(blogs);
    }

    @PostMapping("/create")
    public ResponseEntity<Blog> createBlog( @RequestBody BlogRequest blogRequest) {
        String blogTitle = blogRequest.getBlogTitle();
        String blogContent = blogRequest.getBlogContent();
        Long blogSlugId = blogRequest.getBlogSlugId();
        String blogimage=blogRequest.getBlogimage();

        // Kiểm tra xem booking và customer có tồn tại không
        BlogSlug newBlogSlug = blogSlugRepository.findById(blogSlugId).orElse(null);

        if (newBlogSlug == null ) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(null); // Trả về lỗi nếu booking hoặc customer không tồn tại
        }

        // Tạo feedback mới và lưu nó
        Blog newBlog = new Blog(blogTitle, blogContent, newBlogSlug ,blogimage);
        Blog savedBlog = blogRepository.save(newBlog);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedBlog);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable Long id, @RequestBody BlogRequest blogRequest) {
        // Kiểm tra xem blog có tồn tại không
        Blog existingBlog = blogRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog không tồn tại với ID: " + id));

        // Lấy thông tin mới từ BlogRequest
        String blogTitle = blogRequest.getBlogTitle();
        String blogContent = blogRequest.getBlogContent();
        Long blogSlugId = blogRequest.getBlogSlugId();
        String blogimage=blogRequest.getBlogimage();

        // Tìm BlogSlug mới nếu cần cập nhật
        BlogSlug blogSlug = blogSlugRepository.findById(blogSlugId)
                .orElseThrow(() -> new RuntimeException("BlogSlug không tồn tại với ID: " + blogSlugId));

        // Cập nhật thông tin cho blog
        existingBlog.setBlogTitle(blogTitle);
        existingBlog.setBlogContent(blogContent);
        existingBlog.setBlogSlug(blogSlug);
        existingBlog.setBlogimage(blogimage);

        // Lưu blog đã cập nhật vào cơ sở dữ liệu
        Blog updatedBlog = blogRepository.save(existingBlog);

        return ResponseEntity.ok(updatedBlog);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable Long id) {
        // Kiểm tra xem blog có tồn tại không
        Blog existingBlog = blogRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog không tồn tại với ID: " + id));

        // Xóa blog
        blogRepository.delete(existingBlog);

        return ResponseEntity.noContent().build();
    }



}
