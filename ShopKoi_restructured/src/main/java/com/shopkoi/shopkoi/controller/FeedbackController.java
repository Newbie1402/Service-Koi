package com.shopkoi.shopkoi.controller;


import com.shopkoi.shopkoi.Service.BookingService;
import com.shopkoi.shopkoi.Service.CustomerService;
import com.shopkoi.shopkoi.Service.FeedbackService;
import com.shopkoi.shopkoi.dto.FeedbackRequest;
import com.shopkoi.shopkoi.model.entity.Booking;
import com.shopkoi.shopkoi.model.entity.Customer;
import com.shopkoi.shopkoi.model.entity.Feedback;
import com.shopkoi.shopkoi.model.entity.Staff;
import com.shopkoi.shopkoi.repository.BookingRepository;
import com.shopkoi.shopkoi.repository.CustomerRepository;
import com.shopkoi.shopkoi.repository.FeedbackRepository;
import com.shopkoi.shopkoi.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    @Autowired private FeedbackService feedbackService;

    @Autowired private CustomerRepository customerRepository;

    @Autowired private BookingRepository bookingRepository;

    @Autowired private BookingService bookingService;
    @Autowired
    private StaffRepository staffRepository;

    //in ra tat ca feedback
    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedback() {
         List<Feedback> feedbacks = feedbackService.ListAll();
         return ResponseEntity.ok(feedbacks);
    }

    //tao feedback moi
    @PostMapping("/create")
    public ResponseEntity<Feedback> createFeedback(@RequestBody FeedbackRequest feedbackRequest) {
        Long bookingId = feedbackRequest.getBookingid();
        Long customerId = feedbackRequest.getCustomerid();
        Long staffId = feedbackRequest.getStaffid();
        Integer rating = feedbackRequest.getRating();
        String comment = feedbackRequest.getComment();

        // Kiểm tra xem booking và customer có tồn tại không
        Booking booking = bookingRepository.findById(bookingId).orElse(null);
        Customer customer = customerRepository.findById(customerId).orElse(null);
        Staff staff = staffRepository.findById(staffId).orElse(null);

        if (booking == null || customer == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(null); // Trả về lỗi nếu booking hoặc customer không tồn tại
        }

        // Tạo feedback mới và lưu nó
        Feedback newFeedback = new Feedback(booking, customer, staff, rating, comment);
        Feedback savedFeedback = feedbackService.saveFeedback(newFeedback);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedFeedback);
    }


    // lay feedback theo id
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id) {
        Feedback feedback = feedbackService.FindbyFeedbackId(id);
        if (feedback != null) {
            return ResponseEntity.ok(feedback);
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // cap nhat feedback
    @PutMapping("/update/{id}")
    public ResponseEntity<Feedback> UpdateFeedback(@PathVariable Long id, @RequestBody FeedbackRequest feedbackrequest) {
        Feedback feedback = feedbackService.FindbyFeedbackId(id);
        if (feedback != null) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        else {
            Long customerid=feedbackrequest.getCustomerid();
            Long bookingid=feedbackrequest.getBookingid();
            Integer rating=feedbackrequest.getRating();
            String comment=feedbackrequest.getComment();

            Booking booking=bookingRepository.findById(bookingid).orElse(null);
            Customer customer=customerRepository.findById(customerid).orElse(null);

            if (booking == null || customer == null ) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            feedback.setCustomer(customer);
            feedback.setBooking(booking);
            feedback.setRating(rating);
            feedback.setComment(comment);

            Feedback updatefeedback = feedbackService.saveFeedback(feedback);
            return ResponseEntity.ok(updatefeedback);
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Feedback> DeleteFeedback(@PathVariable Long id) {
        feedbackService.Delete(id);
        return ResponseEntity.noContent().build();
    }
}
