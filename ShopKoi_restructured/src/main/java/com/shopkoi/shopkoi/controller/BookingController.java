
package com.shopkoi.shopkoi.controller;

import com.shopkoi.shopkoi.Service.BookingService;
import com.shopkoi.shopkoi.Service.CustomerService;
import com.shopkoi.shopkoi.Service.MedicineService;
import com.shopkoi.shopkoi.Service.PaymentMethod;
import com.shopkoi.shopkoi.model.entity.*;
import com.shopkoi.shopkoi.repository.BookingRepository;
import com.shopkoi.shopkoi.repository.CustomerRepository;
import com.shopkoi.shopkoi.repository.ServiceRepository;
import com.shopkoi.shopkoi.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.shopkoi.shopkoi.dto.BookingRequest;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private CustomerService customerService;


    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private MedicineService medicineService;

    // Lấy tất cả booking
    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    // Tạo booking mới
    @PostMapping("/create")
    public ResponseEntity<Booking> createBooking(@RequestBody BookingRequest bookingRequest) {
        // Extract data from BookingRequest
        Long customerId = bookingRequest.getCustomerId();
        Long staffId = bookingRequest.getStaffId();
        Long serviceId = bookingRequest.getServiceId();
        String bookingDate = bookingRequest.getBookingDate();
        String bookingDetail = bookingRequest.getBookingDetail();
        Double distance = bookingRequest.getDistance();
        PaymentMethod paymentMethod = bookingRequest.getPaymentMethod();
        Set<Long> medicalIds = bookingRequest.getMedicalid();
        Long totalprice = bookingRequest.getTotalprice();

        // Validate required entities
        Staff staff = staffRepository.findById(staffId).orElse(null);
        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        Customer customer = customerRepository.findById(customerId).orElse(null);

        if (customer == null || staff == null || service == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        // Map medical IDs to Medicine entities
        Set<Medicine> medicines = medicineService.getMedicinesByIds(medicalIds);
        if (medicines.size() != medicalIds.size()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        // Create booking
        Booking newBooking = bookingService.createBooking(
                customer, staff, service, bookingDate, bookingDetail, distance, paymentMethod, medicines, totalprice, false);

        return ResponseEntity.status(HttpStatus.CREATED).body(newBooking);
    }


    // Lấy booking theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        if (booking != null) {
            return ResponseEntity.ok(booking);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Booking> updateBooking(
            @PathVariable Long id,
            @RequestBody BookingRequest bookingRequest) {

        // Tìm kiếm booking theo ID
        Booking booking = bookingService.getBookingById(id);
        if (booking == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        // Extract data từ BookingRequest
        Long customerId = bookingRequest.getCustomerId();
        Long staffId = bookingRequest.getStaffId();
        Long serviceId = bookingRequest.getServiceId();
        String bookingDate = bookingRequest.getBookingDate();
        String bookingDetail = bookingRequest.getBookingDetail();
        Double distance = bookingRequest.getDistance();
        PaymentMethod paymentMethod = bookingRequest.getPaymentMethod();
        Set<Long> medicalIds = bookingRequest.getMedicalid();
        Long totalprice = bookingRequest.getTotalprice();
        boolean paymentstatus = bookingRequest.isPaymentstatus();

        // Kiểm tra sự tồn tại của các entity cần thiết
        Staff staff = staffRepository.findById(staffId).orElse(null);
        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        Customer customer = customerRepository.findById(customerId).orElse(null);

        if (customer == null || staff == null || service == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        // Map medical IDs to Medicine entities
        Set<Medicine> medicines = medicineService.getMedicinesByIds(medicalIds);
        if (medicines.size() != medicalIds.size()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        // Cập nhật các thuộc tính cho booking
        booking.setCustomer(customer);
        booking.setStaff(staff);
        booking.setService(service);
        booking.setBookingDate(bookingDate);
        booking.setBookingDetail(bookingDetail);
        booking.setDistance(distance);
        booking.setPaymentMethod(paymentMethod);
        booking.setMedical(medicines);
        booking.setTotalprice(totalprice);
        booking.setPaymentStatus(paymentstatus);

        // Lưu lại booking
        Booking updatedBooking = bookingService.saveBooking(booking);

        return ResponseEntity.ok(updatedBooking);
    }


    // Xóa booking
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/paymentstatus/{id}")
    public ResponseEntity<Void> updatePaymentStatus(@PathVariable Long id) {
        // Lấy đối tượng booking từ cơ sở dữ liệu
        Booking booking = bookingService.getBookingById(id);

        if (booking != null) {
            // Cập nhật paymentStatus thành true
            booking.setPaymentStatus(true);

            // Lưu lại đối tượng booking đã thay đổi vào cơ sở dữ liệu
            bookingService.saveBooking(booking);

            // Trả về HTTP 200 OK để xác nhận việc cập nhật thành công
            return ResponseEntity.ok().build();
        } else {
            // Nếu không tìm thấy booking với id tương ứng, trả về HTTP 404 Not Found
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/appointment/{id}")
    public ResponseEntity<Void> updateAppointment(@PathVariable Long id) {
        // Lấy đối tượng booking từ cơ sở dữ liệu
        Booking booking = bookingService.getBookingById(id);

        if (booking != null) {
            // Cập nhật paymentStatus thành true
            booking.setAppointment(true);

            // Lưu lại đối tượng booking đã thay đổi vào cơ sở dữ liệu
            bookingService.saveBooking(booking);

            // Trả về HTTP 200 OK để xác nhận việc cập nhật thành công
            return ResponseEntity.ok().build();
        } else {
            // Nếu không tìm thấy booking với id tương ứng, trả về HTTP 404 Not Found
            return ResponseEntity.notFound().build();
        }
    }

}

