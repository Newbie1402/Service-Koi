package com.shopkoi.shopkoi.Service;

import com.shopkoi.shopkoi.model.entity.Staff;
import com.shopkoi.shopkoi.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {

    @Autowired
    private StaffRepository staffRepository;


    public List<Staff> listAll() {
        return staffRepository.findAll();
    }

    public Staff saveStaff(Staff staff) {
        staff.setRightstaff(Right.STAFF);
        return staffRepository.save(staff);
    }

    public Staff getStaff(Long id) {
        return staffRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        staffRepository.deleteById(id);
    }
}
