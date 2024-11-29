package com.shopkoi.shopkoi.Service;

import com.shopkoi.shopkoi.model.entity.ServiceEntity;
import com.shopkoi.shopkoi.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    // Lấy danh sách tất cả
    public List<ServiceEntity> getAllServices() {
        return serviceRepository.findAll();
    }

    // Lưu hoặc cập nhật
    public ServiceEntity saveService(ServiceEntity service) {
        return serviceRepository.save(service);
    }

    // Lấy theo ID
    public ServiceEntity getServiceById(Long id) {
        return serviceRepository.findById(id).orElse(null);
    }

    // Xóa theo ID
    public void deleteService(Long id) {
        serviceRepository.deleteById(id);
    }
}
