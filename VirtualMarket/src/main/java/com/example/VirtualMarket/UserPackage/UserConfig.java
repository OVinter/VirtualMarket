package com.example.VirtualMarket.UserPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import com.example.VirtualMarket.security.model.Authority;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository, PasswordEncoder passwordEncoder) {

        Set<Authority> s = new HashSet<>();
        Authority a = new Authority();
        Authority b = new Authority();
        b.setName("ROLE_USER");
        a.setName("ROLE_ADMIN");
        s.add(a);
        s.add(b);
        List<Product> l = new ArrayList<>();
        Product p = new Product("aaa", "aaacateg", "aaadesc", "aaaphoto");
        l.add(p);

        return args -> {
            User u = new User();
            u.setUserPhoneNumber("9999");
            u.setUserPassword(passwordEncoder.encode("admin"));
            u.setActivated(true);
            u.setAuthorities(s);
            if(userRepository.findOneWithAuthoritiesByUserPhoneNumber("9999").isEmpty()) {
                userRepository.saveAll(
                        List.of(u)
                );
            }
        };
    }

}
