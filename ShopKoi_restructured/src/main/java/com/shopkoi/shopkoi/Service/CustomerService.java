package com.shopkoi.shopkoi.Service;

import com.shopkoi.shopkoi.model.entity.Customer;
import com.shopkoi.shopkoi.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    // Hàm lưu hoặc cập nhật thông tin khách hàng
    public Customer saveCustomer(Customer customer) {
        customer.setRightcustomer(Right.CUSTOMER);

        return customerRepository.save(customer);
    }

    // Hàm lấy tất cả khách hàng
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    // Hàm lấy khách hàng theo ID
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer getCustomerByEmail(String email) {return customerRepository.findByEmail(email).orElse(null);}

    // Hàm xóa khách hàng
    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    // Hàm tìm khách hàng theo ID
    public Customer findCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer updateCustomer(Long id, Customer customerDetails) {
        return customerRepository.findById(id).map(customer -> {
            customer.setFirstname(customerDetails.getFirstname());
            customer.setEmail(customerDetails.getEmail());
            customer.setPhone(customerDetails.getPhone());
            customer.setAddress(customerDetails.getAddress());
            customer.setPassword(customerDetails.getPassword());
            return customerRepository.save(customer);
        }).orElse(null);
    }

}
