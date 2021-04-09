package com.example.VirtualMarket.ProductPackage;

import com.example.VirtualMarket.UserPackage.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(Long id) {
        Optional<Product> p = productRepository.findById(id);
        if(p.isPresent()) {
            return p.get();
        }
        throw new IllegalStateException("product with id: " + id + " not exist");
    }
}
