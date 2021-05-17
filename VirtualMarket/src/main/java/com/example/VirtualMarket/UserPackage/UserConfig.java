package com.example.VirtualMarket.UserPackage;

import com.example.VirtualMarket.ProductPackage.Product;
import com.example.VirtualMarket.security.model.Authority;
import com.example.VirtualMarket.security.repository.AuthorityRepository;
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
    CommandLineRunner commandLineRunner(UserRepository userRepository,
                                        AuthorityRepository authorityRepository,
                                        PasswordEncoder passwordEncoder) {

        Set<Authority> s = new HashSet<>();
        Authority a = new Authority();
        Authority b = new Authority();
        b.setName("ROLE_USER");
        a.setName("ROLE_ADMIN");
        s.add(a);
        s.add(b);

        return args -> {
            User u = new User();
            u.setUserPhoneNumber("9999");
            List<Product> l = new ArrayList<>();
            Product p = new Product("aaa", "aaacateg", "aaadesc", "aaaphoto", u.getUserPhoneNumber());
            l.add(p);
            u.setUserPassword(passwordEncoder.encode("admin"));
            u.setActivated(true);
            u.setAuthorities(s);
            if(userRepository.findOneWithAuthoritiesByUserPhoneNumber("9999").isEmpty()) {
                authorityRepository.save(a);
                authorityRepository.save(b);
                userRepository.saveAll(
                        List.of(u)
                );
            }
        };
    }

}
