package com.example.VirtualMarket.security.rest.dto;

import com.example.VirtualMarket.security.rest.AuthenticationRestController;
import lombok.Getter;
import lombok.Setter;

public class AuthResponse {

  @Getter @Setter
  private AuthenticationRestController.JWTToken jwtToken;
  @Getter @Setter
  private String data;

  public AuthResponse(AuthenticationRestController.JWTToken jwtToken, String data) {
    this.jwtToken = jwtToken;
    this.data = data;
  }
}
