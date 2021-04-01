package com.example.VirtualMarket.UserPackage;

import org.springframework.data.repository.CrudRepository;
import com.example.VirtualMarket.UserPackage.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
