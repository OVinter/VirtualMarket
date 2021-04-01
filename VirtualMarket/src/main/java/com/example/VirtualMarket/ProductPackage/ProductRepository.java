package com.example.VirtualMarket.ProductPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
