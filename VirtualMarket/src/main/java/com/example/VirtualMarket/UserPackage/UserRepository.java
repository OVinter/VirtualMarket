package com.example.VirtualMarket.UserPackage;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.VirtualMarket.UserPackage.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
