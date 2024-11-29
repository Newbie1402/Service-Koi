package com.shopkoi.shopkoi.Service;

import com.shopkoi.shopkoi.model.entity.Booking;
import com.shopkoi.shopkoi.model.entity.Customer;
import com.shopkoi.shopkoi.model.entity.Feedback;
import com.shopkoi.shopkoi.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;

    //in ra tat ca feedback
    public List<Feedback> ListAll() { return feedbackRepository.findAll(); }

    //tao feedback moi
    public Feedback CreateFeedback(Customer customer, Booking booking, Integer rating, String comment) {
        Feedback feedback = new Feedback();
        feedback.setCustomer(customer);
        feedback.setBooking(booking);
        feedback.setRating(rating);
        feedback.setComment(comment);

        return feedbackRepository.save(feedback);
    }

    //lay feedback theo id
    public Feedback FindbyFeedbackId(Long feedbackid) { return feedbackRepository.findById(feedbackid).orElse(null);}

    //luu feedback
    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    //Xoa feedback
    public void Delete(Long feedbackid) { feedbackRepository.deleteById(feedbackid);}
}
