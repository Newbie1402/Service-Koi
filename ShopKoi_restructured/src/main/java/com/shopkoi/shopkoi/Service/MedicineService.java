package com.shopkoi.shopkoi.Service;

import com.shopkoi.shopkoi.model.entity.Medicine;
import com.shopkoi.shopkoi.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MedicineService {

    @Autowired
    MedicineRepository medicineRepository;

    public List<Medicine> getAllMedicine(){
        return medicineRepository.findAll();
    }

    public Optional<Medicine> getMedicineById(Long id){
        return medicineRepository.findById(id);
    }

    public Medicine addMedicine(Medicine medicine){
        return medicineRepository.save(medicine);
    }

    public Set<Medicine> getMedicinesByIds(Set<Long> medicineIds) {
        return medicineRepository.findAllById(medicineIds)
                .stream()
                .collect(Collectors.toSet()); // Convert to Set
    }




}
