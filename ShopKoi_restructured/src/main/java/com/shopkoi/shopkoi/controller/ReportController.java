package com.shopkoi.shopkoi.controller;

import com.shopkoi.shopkoi.Service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    //số lượng dịch vụ đã được đặt
    @GetMapping("/total-bookings")
    public ResponseEntity<Long> getTotalBookings() {
        Long totalBookings = reportService.getTotalBookings();
        return ResponseEntity.ok(totalBookings);
    }

    //tỷ lệ khách hàng hài lòng
    @GetMapping("/customer-satisfaction-rate")
    public ResponseEntity<Double> getCustomerSatisfactionRate() {
        Double satisfactionRate = reportService.getCustomerSatisfactionRate();
        return ResponseEntity.ok(satisfactionRate);
    }

    //tổng doanh thu
    @GetMapping("/total-revenue")
    public ResponseEntity<Double> getTotalRevenue() {
        Double totalRevenue = reportService.getTotalRevenue();
        return ResponseEntity.ok(totalRevenue);
    }

    //hiệu suất làm việc
    @GetMapping("/staff-performance/{staffId}")
    public ResponseEntity<Long> getStaffPerformance(@PathVariable Long staffId) {
        Long staffPerformance = reportService.getStaffPerformance(staffId);
        return ResponseEntity.ok(staffPerformance);
    }
}