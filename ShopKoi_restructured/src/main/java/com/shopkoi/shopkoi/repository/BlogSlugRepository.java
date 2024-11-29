package com.shopkoi.shopkoi.repository;

import com.shopkoi.shopkoi.model.entity.BlogSlug;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogSlugRepository extends JpaRepository<BlogSlug, Long> {
}
