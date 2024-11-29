
package com.shopkoi.shopkoi.Service;

import com.shopkoi.shopkoi.model.entity.*;
import com.shopkoi.shopkoi.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    // Lấy tất cả booking
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Lấy booking theo ID
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    // Tạo mới booking với các tham số riêng lẻ
    public Booking createBooking(Customer customer, Staff staff, ServiceEntity service, String bookingDate, String bookingDetail, Double distance, PaymentMethod paymentMethod, Set<Medicine> medicines, Long totalprice, boolean paymentStatus) {
        Booking booking = new Booking();
        booking.setCustomer(customer);
        booking.setStaff(staff);
        booking.setService(service);
        booking.setBookingDate(bookingDate);
        booking.setBookingDetail(bookingDetail);
        booking.setDistance(distance);
        booking.setPaymentMethod(paymentMethod);
        booking.setAppointment(false);
        booking.setMedical(medicines);
        booking.setTotalprice(totalprice);
        booking.setPaymentStatus(paymentStatus);

        return bookingRepository.save(booking);
    }

    // Cập nhật booking
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    // Xóa booking
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }


}
