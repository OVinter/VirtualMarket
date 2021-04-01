package com.example.VirtualMarket.UserPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/{id}")
    public User findUserByID(@PathVariable Long id) {
        return userService.findUserByID(id);
    }

    @GetMapping("/{id}/products")
    public List<Product> getAllUserProducts(@PathVariable Long id) {
        return userService.getAllUserProducts(id);
    }

    @PutMapping("/{id}")
    public User modifyUser(@PathVariable Long id, @RequestBody User user) {
        return userService.modifyUser(id, user);
    }

    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }

}
