package com.shopkoi.shopkoi.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "feedback")
@Getter
@Setter
@NoArgsConstructor
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackid;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private Staff staff;

    @Column()
    private int rating;

    @Column
    private String comment;

    public Feedback(Booking booking, Customer customer, Staff staff, int rating, String comment) {
        this.booking = booking;
        this.customer = customer;
        this.staff = staff;
        this.rating = rating;
        this.comment = comment;
    }
}
