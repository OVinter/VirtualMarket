package com.example.VirtualMarket.AdminPackage;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AdminConfig {

    @Bean
    CommandLineRunner commandLineRunner(AdminRepository adminRepository) {
        return args -> {
            Admin u = new Admin("073112312", "abcd");
            if(adminRepository.findAll().isEmpty()) {
                adminRepository.saveAll(List.of(u));
            }
        };
    }
}
