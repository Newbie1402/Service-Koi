package com.shopkoi.shopkoi.controller;

import com.shopkoi.shopkoi.Service.MedicineService;
import com.shopkoi.shopkoi.model.entity.Medicine;
import com.shopkoi.shopkoi.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medicine")
@Controller
public class MedicineController {

    @Autowired
    MedicineRepository medicineRepository;

    @Autowired
    MedicineService medicineService;

    @GetMapping
    public ResponseEntity<List<Medicine>> Listallmedicine(){
        List<Medicine> medicineList = medicineService.getAllMedicine();
        return ResponseEntity.ok(medicineList);
    }

    @PostMapping("/create")
    public ResponseEntity<Medicine> addMedicine(@RequestBody Medicine medicine){
        Medicine newMedicine = medicineService.addMedicine(medicine);
        return ResponseEntity.ok(newMedicine);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable Long id, @RequestBody Medicine medicine){
        Medicine existingmedicine = medicineRepository.findById(id).get();
        existingmedicine.setMedicineName(medicine.getMedicineName());
        existingmedicine.setMedicinePrice(medicine.getMedicinePrice());

        medicineRepository.save(existingmedicine);
        return ResponseEntity.ok(existingmedicine);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicine> getMedicineById(@PathVariable Long id){
        Medicine medicine = medicineRepository.findById(id).get();
        return ResponseEntity.ok(medicine);
    }

}
