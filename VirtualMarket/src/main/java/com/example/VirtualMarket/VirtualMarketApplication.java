package com.example.VirtualMarket;

import com.example.VirtualMarket.VisitorPackage.VisitorRepository;
import com.example.VirtualMarket.VisitorPackage.Visitor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VirtualMarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(VirtualMarketApplication.class, args);
	}

}
