package com.shopkoi.shopkoi.Service;


import com.shopkoi.shopkoi.repository.BookingRepository;
import com.shopkoi.shopkoi.repository.FeedbackRepository;
import com.shopkoi.shopkoi.repository.ServiceRepository;
import com.shopkoi.shopkoi.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private StaffRepository staffRepository;

    //số lượng dịch vụ đã được đặt
    public Long getTotalBookings() {
        return bookingRepository.count();
    }

    //tỷ lệ hài lòng khách hàng
    public Double getCustomerSatisfactionRate() {
        long totalFeedbacks = feedbackRepository.count();
        long positiveFeedbacks = feedbackRepository.countByRatingGreaterThanEqual(4);

        if (totalFeedbacks == 0) return 0.0;
        return (positiveFeedbacks * 100.0) / totalFeedbacks;
    }

    //tổng doanh thu từ các dịch vụ
    public Double getTotalRevenue() {
        return bookingRepository.calculateTotalRevenue();
    }

    // Tính hiệu suất làm việc của bác sĩ
    public Long getStaffPerformance(Long staffId) {
        return bookingRepository.countByStaffId(staffId);
    }
}
