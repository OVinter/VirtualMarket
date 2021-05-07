package com.example.VirtualMarket.ProductPackage;

import lombok.Getter;
import lombok.Setter;

public class ProductModel {

  @Getter@Setter
  private String productName;
  @Getter @Setter
  private String productCategory;
  @Getter @Setter
  private String productDescription;
  @Getter @Setter
  private String productPhoto;

  public ProductModel(String productName, String productCategory, String productDescription, String productPhoto) {
    this.productName = productName;
    this.productCategory = productCategory;
    this.productDescription = productDescription;
    this.productPhoto = productPhoto;
  }
}
