package com.example.VirtualMarket.VisitorPackage;

import com.example.VirtualMarket.VisitorPackage.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorRepository extends JpaRepository<Visitor, Long> {
}
