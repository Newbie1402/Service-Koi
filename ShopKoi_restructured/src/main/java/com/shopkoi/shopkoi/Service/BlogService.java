package com.shopkoi.shopkoi.Service;

import com.shopkoi.shopkoi.model.entity.Blog;
import com.shopkoi.shopkoi.model.entity.BlogSlug;
import com.shopkoi.shopkoi.model.entity.Feedback;
import com.shopkoi.shopkoi.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {
    @Autowired private BlogRepository blogRepository;
    public List<Blog> ListAll() { return blogRepository.findAll(); }

    public Blog CreateBlog(Long BlogId, String title, String content, BlogSlug slug) {
        Blog newBlog = new Blog();
        newBlog.setBlogId(BlogId);
        newBlog.setBlogTitle(title);
        newBlog.setBlogContent(content);
        newBlog.setBlogSlug(slug);
        return blogRepository.save(newBlog);
    }

    public Blog UpdateBlog(Long BlogId, Blog updatedBlogData) {
        // Tìm blog theo ID
        Optional<Blog> existingBlog = blogRepository.findById(BlogId);

        if (existingBlog.isPresent()) {
            Blog blog = existingBlog.get();
            blog.setBlogTitle(updatedBlogData.getBlogTitle());   // Cập nhật tiêu đề
            blog.setBlogContent(updatedBlogData.getBlogContent()); // Cập nhật nội dung
            blog.setBlogSlug(updatedBlogData.getBlogSlug());   // Cập nhật BlogSlug nếu cần

            // Lưu lại blog sau khi cập nhật
            return blogRepository.save(blog);
        } else {
            throw new RuntimeException("Blog không tồn tại với ID: " + BlogId);
        }
    }

    // Hàm xóa Blog
    public void deleteBlog(Long BlogId) {
        if (blogRepository.existsById(BlogId)) {
            blogRepository.deleteById(BlogId);  // Xóa Blog theo ID nếu tồn tại
        } else {
            throw new RuntimeException("Blog không tồn tại với ID: " + BlogId);
        }
    }
}
