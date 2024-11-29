package com.shopkoi.shopkoi.repository;

import com.shopkoi.shopkoi.model.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    // Đếm số lượng booking theo staffId
    Long countByStaffId(Long staffId);

    // Tính tổng doanh thu từ booking
    @Query("SELECT SUM(b.service.price) FROM Booking b")
    Double calculateTotalRevenue();
}