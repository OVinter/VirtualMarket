package com.example.VirtualMarket.AdminPackage;

import com.example.VirtualMarket.UserPackage.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    private AdminRepository adminRepository;

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin modifyAdmin(Long id, Admin admin) {
        Optional<Admin> a = adminRepository.findById(id);
        if(a.isPresent()) {
            Admin adminModify = a.get();
            if(admin.getAdminPhoneNumber() != null)
                adminModify.setAdminPhoneNumber(admin.getAdminPhoneNumber());
            if(admin.getAdminPassword() != null)
                adminModify.setAdminPassword(admin.getAdminPassword());
            return adminRepository.save(adminModify);
        }
        throw new IllegalStateException("admin with id: " + id + " not exist");
    }
}
