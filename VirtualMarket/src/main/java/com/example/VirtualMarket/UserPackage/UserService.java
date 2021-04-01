package com.example.VirtualMarket.UserPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        Optional<User> u = userRepository.findByPhoneNumber(user.getUserPhoneNumber());
        if(u.isPresent()) {
            throw new IllegalStateException("user already exist with this phone number");
        }

        return userRepository.save(user);
    }

    public User findUserByID(Long id) {
        Optional<User> u = userRepository.findById(id);
        if(u.isPresent()) {
            return u.get();
        }
        throw new IllegalStateException("user with id: " + id + " not exist");
    }

    public List<Product> getAllUserProducts(Long id) {
        Optional<User> u = userRepository.findById(id);
        if(u.isPresent()) {
            User user = u.get();
            return user.getProducts();
        }
        throw new IllegalStateException("user with id: " + id + " not exist");
    }

    public User modifyUser(Long id, User user) {
        Optional<User> u = userRepository.findById(id);
        if(u.isPresent()) {
            User userModify = u.get();
            if(user.getUserPhoneNumber() != null)
                userModify.setUserPhoneNumber(user.getUserPhoneNumber());
            if(user.getUserPassword() != null)
                userModify.setUserPassword(user.getUserPassword());
            return userRepository.save(userModify);
        }
        throw new IllegalStateException("user with id: " + id + " not exist");
    }

    public boolean deleteUser(Long id) {
        Optional<User> u = userRepository.findById(id);
        if(u.isPresent()) {
            User user = u.get();
            userRepository.delete(user);
            return true;
        }
        return false;
    }
}
