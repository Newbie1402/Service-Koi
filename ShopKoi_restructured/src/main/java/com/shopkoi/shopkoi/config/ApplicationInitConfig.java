package com.shopkoi.shopkoi.config;

import com.shopkoi.shopkoi.Service.CustomerService;
import com.shopkoi.shopkoi.Service.Right;
import com.shopkoi.shopkoi.model.entity.Customer;
import com.shopkoi.shopkoi.repository.CustomerRepository;

import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class ApplicationInitConfig {

    @Bean
    ApplicationRunner ApplicationRunner(CustomerRepository customerRepository, PasswordEncoder passwordEncoder) {
        return args -> {

            if (customerRepository.findByEmail("admin@gmail.com").isEmpty()) {
                Customer customer = Customer.builder()
                        .firstname("Admin")
                        .email("admin@gmail.com")
                        .password(passwordEncoder.encode("123"))
                        .rightcustomer(Right.ADMIN)
                        .build();
                customerRepository.save(customer);
            }

        };
    }
}
