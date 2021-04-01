package com.example.VirtualMarket.AdminPackage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
