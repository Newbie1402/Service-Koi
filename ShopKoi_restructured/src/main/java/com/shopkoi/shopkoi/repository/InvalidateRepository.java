package com.shopkoi.shopkoi.repository;

import com.shopkoi.shopkoi.model.entity.InvalidateToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvalidateRepository extends JpaRepository<InvalidateToken, String> {
}
