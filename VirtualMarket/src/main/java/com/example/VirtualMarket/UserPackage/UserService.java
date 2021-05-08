package com.example.VirtualMarket.UserPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import com.example.VirtualMarket.ProductPackage.ProductModel;
import com.example.VirtualMarket.ProductPackage.ProductRepository;
import com.example.VirtualMarket.security.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    @Autowired
    public UserService(UserRepository userRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
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

    @Transactional(readOnly = true)
    public User getUserWithAuthorities() {
        Optional<User> u = SecurityUtils.
                getCurrentUsername().
                flatMap(userRepository::findOneWithAuthoritiesByUserPhoneNumber);

        if(u.isPresent())
            return u.get();
        else
            throw new IllegalStateException("user not exist");
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

    public Product addProduct(Long id, ProductModel product) {
        Optional<User> u = userRepository.findById(id);
        User user;
        Product p = new Product();
        p.setProductName(product.getProductName());
        p.setProductDescription(product.getProductDescription());
        p.setProductCategory(product.getProductCategory());
        p.setProductPhoto(product.getProductPhoto());

        List<Product> products = new ArrayList<Product>();
        if(u.isPresent()) {
            user = u.get();
            p.setUserPhone(user.getUserPhoneNumber());
            if (!user.getProducts().isEmpty()) {
                products = user.getProducts();
            }
            products.add(p);
            user.setProducts(products);
            return productRepository.save(p);
        }
        throw new IllegalStateException("user with id: " + id + " not exist");
    }


    public Product getProduct(Long idUser, Long idProduct) {
        Optional<User> u = userRepository.findById(idUser);
        User user;
        Optional<Product> p;
        if(u.isPresent()) {
            p = productRepository.findById(idProduct);
            if(p.isPresent())
                return p.get();
            throw new IllegalStateException("product with id: " + idProduct + " not exist");
        }
        throw new IllegalStateException("user with id: " + idUser + " not exist");
    }

    public Product modifyProduct(Long idUser, Long idProduct, Product product) {
        Optional<User> u = userRepository.findById(idUser);
        User user;
        Product modifyProduct;
        Optional<Product> p;
        if(u.isPresent()) {
            user = u.get();
            p = productRepository.findById(idProduct);
            if (p.isPresent()) {
                modifyProduct = p.get();
                if (product.getProductName() != null)
                    modifyProduct.setProductName(product.getProductName());
                if (product.getProductCategory() != null)
                    modifyProduct.setProductCategory(product.getProductCategory());
                if (product.getProductDescription() != null)
                    modifyProduct.setProductDescription(product.getProductDescription());
                if (product.getProductPhoto() != null)
                    modifyProduct.setProductPhoto(product.getProductPhoto());
                return productRepository.save(modifyProduct);
            }
            throw new IllegalStateException("product with id: " + idProduct + " not exist");
        }
        throw new IllegalStateException("user with id: " + idUser + " not exist");
    }

    public boolean deleteProduct(Long idUser, Long idProduct) {
        Optional<User> u = userRepository.findById(idUser);
        Optional<Product> p;
        Product product;
        User user;
        List<Product> products;
        if(u.isPresent()) {
            user = u.get();
            p = productRepository.findById(idProduct);
            if(p.isPresent()) {
                product = p.get();
                products = user.getProducts();
                products.remove(product);
                user.setProducts(products);
                userRepository.save(user);
                productRepository.delete(product);
                return true;
            }
            throw new IllegalStateException("product with id: " + idProduct + " not exist");
        }
        throw new IllegalStateException("user with id: " + idUser + " not exist");
    }

  public List<Product> getAllProducts() {
      List<User> userList = userRepository.findAll();
      List<Product> productList = new ArrayList<>();
      for (User u: userList) {
        productList.addAll(u.getProducts());
      }

      return productList;
  }
}
