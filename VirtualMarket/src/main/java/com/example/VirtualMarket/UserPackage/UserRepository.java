package com.example.VirtualMarket.UserPackage;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.VirtualMarket.UserPackage.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.userPhoneNumber = ?1")
    public Optional<User> findByPhoneNumber(String userPhoneNumber);



}
