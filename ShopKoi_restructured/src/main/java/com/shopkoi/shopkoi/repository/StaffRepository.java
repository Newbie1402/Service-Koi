package com.shopkoi.shopkoi.repository;

import com.shopkoi.shopkoi.model.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
    Optional<Staff> findByStaffemail(String staffemail);

    Boolean existsByStaffemail(String staffemail);
}
