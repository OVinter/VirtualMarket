package com.example.VirtualMarket.security.rest;

import com.example.VirtualMarket.ProductPackage.Product;
import com.example.VirtualMarket.UserPackage.User;
import com.example.VirtualMarket.UserPackage.UserRepository;
import com.example.VirtualMarket.security.jwt.JWTFilter;
import com.example.VirtualMarket.security.jwt.TokenProvider;
import com.example.VirtualMarket.security.model.Authority;
import com.example.VirtualMarket.security.rest.dto.LoginDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Controller to authenticate users.
 */
@RestController
@RequestMapping("/api")
public class AuthenticationRestController {

   private final TokenProvider tokenProvider;

   private final AuthenticationManagerBuilder authenticationManagerBuilder;

   private final UserRepository userRepository;

   private PasswordEncoder passwordEncoder;

   public AuthenticationRestController(TokenProvider tokenProvider,
                                       AuthenticationManagerBuilder authenticationManagerBuilder,
                                       UserRepository userRepository,
                                       PasswordEncoder passwordEncoder) {
      this.tokenProvider = tokenProvider;
      this.authenticationManagerBuilder = authenticationManagerBuilder;
      this.userRepository = userRepository;
      this.passwordEncoder = passwordEncoder;

   }

   @PostMapping("/authenticate")
   public JWTToken authorize(@Valid @RequestBody LoginDto loginDto) {

      if(userRepository.findByPhoneNumber(loginDto.getUserPhoneNumber()).isEmpty()) {
         User u = new User();
         Set<Authority> s = new HashSet<>();
         Authority a = new Authority();
         a.setName("ROLE_USER");
         s.add(a);
         u.setUserPhoneNumber(loginDto.getUserPhoneNumber());
         u.setUserPassword(passwordEncoder.encode(loginDto.getPassword()));
         u.setAuthorities(s);
         u.setActivated(true);
         userRepository.save(u);
      }

      UsernamePasswordAuthenticationToken authenticationToken =
         new UsernamePasswordAuthenticationToken(loginDto.getUserPhoneNumber(), loginDto.getPassword());

      Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
      SecurityContextHolder.getContext().setAuthentication(authentication);

      //boolean rememberMe = (loginDto.isRememberMe() == null) ? false : loginDto.isRememberMe();
      String jwt = tokenProvider.createToken(authentication/*, rememberMe*/);


      HttpHeaders httpHeaders = new HttpHeaders();
      httpHeaders.add(JWTFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);
//      return new ResponseEntity<>(new JWTToken(jwt), httpHeaders, HttpStatus.OK);
     JWTToken j = new JWTToken(jwt);
     System.out.println(j.getIdToken());
      return new JWTToken(jwt);
   }

   /**
    * Object to return as body in JWT Authentication.
    */
   static class JWTToken {

      private String idToken;

      JWTToken(String idToken) {
         this.idToken = idToken;
      }

      @JsonProperty("id_token")
      String getIdToken() {
         return idToken;
      }

      void setIdToken(String idToken) {
         this.idToken = idToken;
      }
   }
}
