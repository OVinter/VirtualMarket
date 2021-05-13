package com.example.VirtualMarket.UserPackage;

import lombok.Getter;
import lombok.Setter;

public class UserModel {

  @Getter @Setter
  private String userPhoneNumber;
  @Getter @Setter
  private String userPassword;

  public UserModel(String userPhoneNumber, String userPassword) {
    this.userPhoneNumber = userPhoneNumber;
    this.userPassword = userPassword;
  }
}
