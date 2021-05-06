package com.example.VirtualMarket.UserPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/user")
    public User getActualUser() {
        return userService.getUserWithAuthorities();
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

    @GetMapping("/products")
    public List<Product> getAllProducts() {
      return userService.getAllProducts();
    }

    @PutMapping("/{id}")
    public User modifyUser(@PathVariable Long id, @RequestBody User user) {
        return userService.modifyUser(id, user);
    }

    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }

    @PostMapping("/{idUser}/products")
    public Product addProduct(@PathVariable Long idUser, @RequestBody Product product) {
        return userService.addProduct(idUser, product);
    }

    @GetMapping("/{idUser}/products/{idProduct}")
    public Product getProduct(@PathVariable Long idUser, @PathVariable Long idProduct) {
        return userService.getProduct(idUser, idProduct);
    }

    @PutMapping("/{idUser}/products/{idProduct}")
    public Product modifyProduct(@PathVariable Long idUser,
                                 @PathVariable Long idProduct,
                                 @RequestBody Product product) {
        return userService.modifyProduct(idUser, idProduct, product);
    }

    @DeleteMapping("/{idUser}/products/{idProduct}")
    public boolean deleteProduct(@PathVariable Long idUser, @PathVariable Long idProduct) {
        return userService.deleteProduct(idUser, idProduct);
    }

}
