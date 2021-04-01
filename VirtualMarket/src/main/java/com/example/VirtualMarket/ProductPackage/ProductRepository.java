package com.example.VirtualMarket.ProductPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
