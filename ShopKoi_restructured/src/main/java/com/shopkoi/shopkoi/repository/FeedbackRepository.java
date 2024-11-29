package com.shopkoi.shopkoi.repository;

import com.shopkoi.shopkoi.model.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    Long countByRatingGreaterThanEqual(int rating);
}
