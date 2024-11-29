package com.shopkoi.shopkoi.Service;

import com.shopkoi.shopkoi.model.entity.BlogSlug;
import com.shopkoi.shopkoi.repository.BlogSlugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogSlugService {
    @Autowired
    private BlogSlugRepository blogSlugRepository;

    public List<BlogSlug> findAll() {
        return blogSlugRepository.findAll();
    }

    public BlogSlug CreatBlogSlug(Long BlogSlugId, String title, String description) {
        BlogSlug blogSlug = new BlogSlug();
        blogSlug.setBlogSlugId(BlogSlugId);
        blogSlug.setTitle(title);
        blogSlug.setDescription(description);
        return blogSlugRepository.save(blogSlug);
    }

    // Hàm cập nhật nội dung BlogSlug
    public BlogSlug updateBlogSlug(Long blogSlugId, String title, String description) {
        // Tìm BlogSlug theo ID
        Optional<BlogSlug> existingBlogSlug = blogSlugRepository.findById(blogSlugId);

        if (existingBlogSlug.isPresent()) {
            BlogSlug blogSlug = existingBlogSlug.get();
            blogSlug.setTitle(title);
            blogSlug.setDescription(description);
            return blogSlugRepository.save(blogSlug); // Lưu lại thông tin đã cập nhật
        } else {
            throw new RuntimeException("BlogSlug không tồn tại với ID: " + blogSlugId);

        }

    }

    // Hàm xóa BlogSlug theo ID
    public void deleteBlogSlug(Long blogSlugId) {
        // Kiểm tra xem BlogSlug có tồn tại không
        if (blogSlugRepository.existsById(blogSlugId)) {
            blogSlugRepository.deleteById(blogSlugId); // Xóa nếu tồn tại
        } else {
            throw new RuntimeException("BlogSlug không tồn tại với ID: " + blogSlugId);
        }
    }

}
